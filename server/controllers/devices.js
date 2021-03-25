import express from 'express';
import mongoose from 'mongoose';

import DeviceMessage from '../models/deviceMessage.js';

export const getDevices = async (req, res) => {
    try{
        const deviceMessages = await DeviceMessage.find();

        res.status(200).json(deviceMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createDevice = async(req, res) => {
    const device = req.body;
    const newDevice = new DeviceMessage(device);

    try{
        await newDevice.save();
        res.status(201).json(newDevice);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}