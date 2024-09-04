const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Database = require('../db/Database');
const sql = require('mssql');

exports.signup =  async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const pool = await Database.connect();

        const checkRequest = pool.request();
        const checkResult = await checkRequest.input('email', sql.VarChar, email).query(
            `SELECT * FROM Users WHERE email = @email`
        );

        if (checkResult.recordset.length > 0) {
            return res.status(409).json({status: 'fail', message: 'User with this email already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const insertRequest = pool.request();
        const insertResult = await insertRequest
            .input('name', sql.VarChar, name)
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, hashedPassword)
            .query(`INSERT INTO Users (email, name, password) VALUES (@email, @name, @password);
                    SELECT SCOPE_IDENTITY() AS userId;`);

        const userId = insertResult.recordset[0].userId;
        const role = insertResult.recordset[0].role;

        const token = jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET, { expiresIn: '90d' });
        res.status(201).json({
             status: 'success', message: 'User created successfully',
             token,
             user: {
                id: userId,
                email: email,
                name: name,
                role: role
             }
            });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).send('Server error');
    }
};

exports.signin =  async (req, res) => {
    const { email, password } = req.body;

    try {
        const pool = await Database.connect();

        const request = pool.request();
        const result = await request
            .input('email', sql.VarChar, email)
            .query(`SELECT * FROM Users WHERE email = @email`);

        if (result.recordset.length === 0) {
            return res.status(404).send('User not found');
        }

        const user = result.recordset[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign({ id: user.UserID, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '90d'
        });

        res.json({
            status: 'success', message: 'log in successfully',
            token,
            user: {
                id: user.UserID,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        });

    } catch (err) {
        console.error('Error signing in:', err);
        res.status(500).send('Server error');
    }
};

exports.profile =  (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).send('Access denied');
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        res.send(verified);
    } catch (err) {
        res.status(400).send('Invalid token');
    }
};
