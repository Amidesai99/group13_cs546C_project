const express = require('express');
const router = express.Router();
const patientData = require('../data/patient');





  // 2. POST /hospital --> to store the restaurant
router.post('/', async (req, res) => {

    let patientPostData = req.body;
  
    // if (!patientPostData.firstname) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
    // if (!patientPostData.lastname) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
    // if (!patientPostData.email) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
    // if (!patientPostData.Age) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
    // if (!patientPostData.DateOfBirth) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
    // if (!patientPostData.Gender) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
    
    // if (!patientPostData.City) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
  
    // if (!patientPostData.EmergencyPhonenumber) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
  
    // if (!patientPostData.Username) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
  
    // if (!patientPostData.Password) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
  
    // if (!patientPostData.specialist) {
    //   res.status(400).json({ error: 'Error' });
    //   return;
    // }
  
  
  
  
    try {
      const {firstname, lastname,dateOfBirth, sex,hospitalNumber,diseases,score,room   } = await patientPostData;
      const newPatient = await patientData.create(firstname, lastname,dateOfBirth, sex,hospitalNumber,diseases,score,room );
      res.json(newPatient);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });
  
  // 3. GET /hospital/{id} --> get restaurant by Id
  router.get('/:id', async (req, res) => {
      try {
  
        if (!req.params.id) {
          res.status(400).json({ error: 'You must Supply hospitalId' });
          return;
      }
      if (typeof req.params.id === 'undefined') {
        res.status(400).json({ error: 'You must Supply hospitalId' });
        return;
      }
      if (typeof req.params.id !== 'string') {
        res.status(400).json({ error: 'You must Supply hospitalId in string' });
        return;
      }
  
        const patientById = await patientData.get(req.params.id);
        res.json(patientById);
      } catch (e) {
        res.status(404).json({ error: 'patient not found' });
      }
  });

  module.exports = router;