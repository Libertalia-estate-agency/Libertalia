const admin = require('firebase-admin');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

// Initialize Firebase Admin SDK
const serviceAccount = require('./firebaseService.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Load Excel file
const filePath = path.join(__dirname, './excel/roles.xlsx');
const workbook = xlsx.readFile(filePath);
const sheetName = workbook.SheetNames[0]; // Use the first sheet
const worksheet = workbook.Sheets[sheetName];

// Convert Excel to JSON
const data = xlsx.utils.sheet_to_json(worksheet);
//console.log("EXCEL TO JSON :::: DATA ::: " + JSON.stringify(data));

// Function to upload data to Firestore
const uploadRolesToFirestore = async () => {
  
  const collectionRef = db.collection('roles');
  console.log("Collection Ref ::: " + JSON.stringify(collectionRef));

  for (let i = 0; i < data.length; i++) {
    const record = data[i];
    console.log("DATA Iteration Record ::: " + JSON.stringify(record));

    try {
      await collectionRef.add(record);
      console.log(`Document ${i + 1} added successfully`);
    } catch (error) {
      console.error(`Error adding document ${i + 1}:`, error);
    }
  }

  console.log('Data upload complete.');
};

const readRolesFromFirestore = async () => {
  const snapshot = await db.collection('roles').get();
  
  snapshot.forEach((doc) => {
    console.log("DOCUMENT ID :: " + `${doc.id}`);
    console.log("DOCUMENT DATA :: " + JSON.stringify(doc.data()));
  });
}

const deleteRolesFromFirestore = async () => {
  const snapshot = await db.collection('roles').get();
  
  snapshot.forEach((doc) => {
    console.log("DOCUMENT ID :: " + `${doc.id}`);
    console.log("DOCUMENT DATA :: " + JSON.stringify(doc.data()));
  
    db.collection('roles').doc(doc.id).delete().then(() => {
      console.log("DOCUMENT DELETED :: " + `${doc.id}`);
    });

  });
}

//readRolesFromFirestore();
//uploadRolesToFirestore();


// Function to upload data to Firestore
const uploadUsersToFirestore = async () => {

  
  // Load Excel file
  const userPath = path.join(__dirname, './excel/users.xlsx');
  const workbook = xlsx.readFile(userPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const userData = xlsx.utils.sheet_to_json(worksheet);
  //console.log("EXCEL TO JSON :::: DATA ::: " + JSON.stringify(data));

  
  const collectionRef = db.collection('users');
  //console.log("Collection Ref ::: " + JSON.stringify(collectionRef));

  for (let i = 0; i < userData.length; i++) {
    
    try {
      const record = userData[i];
      console.log("USER ITERATION RECORD ::: " + JSON.stringify(record));

      await collectionRef.add(record);
      console.log(`Document ${i + 1} added successfully`);
    } catch (error) {
      console.error(`Error adding document ${i + 1}:`, error);
    }
  }

  console.log('Data upload complete.');
};

const readUsersFromFirestore = async () => {
  const snapshot = await db.collection('users').get();
  
  snapshot.forEach((doc) => {
    console.log("DOCUMENT ID :: " + `${doc.id}`);
    console.log("DOCUMENT DATA :: " + JSON.stringify(doc.data()));
  });
}

const deleteUsersFromFirestore = async () => {
  const snapshot = await db.collection('users').get();
  
  snapshot.forEach((doc) => {
    console.log("DOCUMENT ID :: " + `${doc.id}`);
    console.log("DOCUMENT DATA :: " + JSON.stringify(doc.data()));
  
    db.collection('users').doc(doc.id).delete().then(() => {
      console.log("DOCUMENT DELETED :: " + `${doc.id}`);
    });

  });
}

//deleteUsersFromFirestore();
//uploadUsersToFirestore();
//readUsersFromFirestore();



// Function to upload data to Firestore
const uploadAgentsToFirestore = async () => {

  
  // Load Excel file
  const agentPath = path.join(__dirname, './excel/agents.xlsx');
  const workbook = xlsx.readFile(agentPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const agentData = xlsx.utils.sheet_to_json(worksheet);
  console.log("EXCEL TO JSON :::: AGENT DATA ::: " + JSON.stringify(data));

  
  const collectionRef = db.collection('agents');
  //console.log("Collection Ref ::: " + JSON.stringify(collectionRef));

  for (let i = 0; i < agentData.length; i++) {
    
    try {
      const agent = agentData[i];
      console.log("AGENT ITERATION RECORD ::: " + JSON.stringify(agent));

      await collectionRef.add(agent);
      console.log(`Document ${i + 1} added successfully`);
    } catch (error) {
      console.error(`Error adding document ${i + 1}:`, error);
    }
  }

  console.log('Data upload complete.');
};

const readAgentsFromFirestore = async () => {
  const snapshot = await db.collection('agents').get();
  
  snapshot.forEach((doc) => {
    console.log("DOCUMENT ID :: " + `${doc.id}`);
    console.log("DOCUMENT DATA :: " + JSON.stringify(doc.data()));
  });
}

const deleteAgentsFromFirestore = async () => {
  const snapshot = await db.collection('agents').get();
  
  snapshot.forEach((doc) => {
    console.log("DOCUMENT ID :: " + `${doc.id}`);
    console.log("DOCUMENT DATA :: " + JSON.stringify(doc.data()));
  
    db.collection('agents').doc(doc.id).delete().then(() => {
      console.log("DOCUMENT DELETED :: " + `${doc.id}`);
    });

  });
}

//deleteAgentsFromFirestore();
//uploadAgentsToFirestore();
//readAgentsFromFirestore();


// Function to upload data to Firestore
const uploadContactsToFirestore = async () => {

  
  // Load Excel file
  const contactsPath = path.join(__dirname, './excel/contacts.xlsx');
  const workbook = xlsx.readFile(contactsPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const contactData = xlsx.utils.sheet_to_json(worksheet);
  console.log("EXCEL TO JSON :::: CONTACT DATA ::: " + JSON.stringify(contactData));

  
  const collectionRef = db.collection('contacts');
  //console.log("Collection Ref ::: " + JSON.stringify(collectionRef));

  for (let i = 0; i < contactData.length; i++) {
    
    try {
      const contact = contactData[i];
      console.log("CONTACT ITERATION RECORD ::: " + JSON.stringify(contact));

      await collectionRef.add(contact);
      console.log(`Contact ${i + 1} added successfully`);
    } catch (error) {
      console.error(`Error adding document ${i + 1}:`, error);
    }
  }

  console.log('Data upload complete.');
};

const readContactsFromFirestore = async () => {
  const snapshot = await db.collection('contacts').get();
  
  snapshot.forEach((doc) => {
    console.log("CONTACT ID :: " + `${doc.id}`);
    console.log("CONTACT DATA :: " + JSON.stringify(doc.data()));
  });
}

const deleteContactsFromFirestore = async () => { 
  const snapshot = await db.collection('contacts').get();
  
  snapshot.forEach((doc) => {
    console.log("CONTACT ID :: " + `${doc.id}`);
    console.log("CONTACT DATA :: " + JSON.stringify(doc.data()));
  
    db.collection('contacts').doc(doc.id).delete().then(() => {
      console.log("CONTACT ID DELETED :: " + `${doc.id}`);
    });

  });
}

//deleteContactsFromFirestore();
//uploadContactsToFirestore();
//readContactsFromFirestore();



// Function to upload data to Firestore
const uploadIncomingContacts = async () => {

  
  // Load Excel file
  const contactsPath = path.join(__dirname, './excel/incomingContacts.xlsx');
  const workbook = xlsx.readFile(contactsPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const contactData = xlsx.utils.sheet_to_json(worksheet);
  console.log("EXCEL TO JSON :::: CONTACT DATA ::: " + JSON.stringify(contactData));

  
  const collectionRef = db.collection('incomingContacts');
  //console.log("Collection Ref ::: " + JSON.stringify(collectionRef));

  for (let i = 0; i < contactData.length; i++) {
    
    try {
      const contact = contactData[i];
      console.log("CONTACT ITERATION RECORD ::: " + JSON.stringify(contact));

      await collectionRef.add(contact);
      console.log(`Contact ${i + 1} added successfully`);
    } catch (error) {
      console.error(`Error adding document ${i + 1}:`, error);
    }
  }

  console.log('Data upload complete.');
};

const readIncomingContacts = async () => {
  const snapshot = await db.collection('incomingContacts').get();
  
  snapshot.forEach((doc) => {
    console.log("CONTACT ID :: " + `${doc.id}`);
    console.log("CONTACT DATA :: " + JSON.stringify(doc.data()));
  });
}

const deleteIncomingContacts = async () => { 
  const snapshot = await db.collection('incomingContacts').get();
  
  snapshot.forEach((doc) => {
    console.log("CONTACT ID :: " + `${doc.id}`);
    console.log("CONTACT DATA :: " + JSON.stringify(doc.data()));
  
    db.collection('contacts').doc(doc.id).delete().then(() => {
      console.log("CONTACT ID DELETED :: " + `${doc.id}`);
    });

  });
}

//deleteIncomingContacts();
//uploadIncomingContacts();
//readIncomingContacts();



// Function to upload data to Firestore
const uploadLeads = async () => {

  
  // Load Excel file
  const leadsPath = path.join(__dirname, './excel/leads.xlsx');
  const workbook = xlsx.readFile(leadsPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const leadsData = xlsx.utils.sheet_to_json(worksheet);
  console.log("EXCEL TO JSON :::: LEAD DATA ::: " + JSON.stringify(leadsData));

  
  const collectionRef = db.collection('leads');
  //console.log("Collection Ref ::: " + JSON.stringify(collectionRef));

  for (let i = 0; i < leadsData.length; i++) {
    
    try {
      const lead = leadsData[i];
      console.log("LEAD ITERATION RECORD ::: " + JSON.stringify(lead));

      await collectionRef.add(lead);
      console.log(`Lead ${i + 1} added successfully`);
    } catch (error) {
      console.error(`Error adding document ${i + 1}:`, error);
    }
  }

  console.log('Data upload complete.');
};

const readLeads = async () => {
  const snapshot = await db.collection('leads').get();
  
  snapshot.forEach((doc) => {
    console.log("LEAD ID :: " + `${doc.id}`);
    console.log("LEAD DATA :: " + JSON.stringify(doc.data()));
  });
}

const deleteLeads = async () => { 
  const snapshot = await db.collection('leads').get();
  
  snapshot.forEach((doc) => {
    console.log("LEAD ID :: " + `${doc.id}`);
    console.log("LEAD DATA :: " + JSON.stringify(doc.data()));
  
    db.collection('leads').doc(doc.id).delete().then(() => {
      console.log("LEAD ID DELETED :: " + `${doc.id}`);
    });

  });
}

const leadsJson = async () => {

  
  // Load Excel file
  const leadsPath = path.join(__dirname, './excel/newLeads.xlsx');
  const workbook = xlsx.readFile(leadsPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const leadsData = xlsx.utils.sheet_to_json(worksheet, { header : 1 });
  //console.log("EXCEL TO JSON :::: LEAD DATA ::: " + JSON.stringify(leadsData));

  // Convert the array of arrays to an array of objects (if needed)
  const headers = leadsData[0];
  const data = leadsData.slice(1).map(row => {
    let obj = {};
    row.forEach((cell, i) => {
      obj[headers[i]] = cell;
    });
    return obj;
  });

  // Output the JavaScript object
  console.log("DATA :::: " + JSON.stringify(data));  
  // Optionally, save the JSON data to a file
  const jsonFilePath = './excel/newLeads.json';
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

  //console.log(`JSON data has been saved to ${jsonFilePath}`);

}


const contactsJson = async () => {

  
  // Load Excel file
  const contactsPath = path.join(__dirname, './excel/contact.xlsx');
  const workbook = xlsx.readFile(contactsPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const contactsData = xlsx.utils.sheet_to_json(worksheet, { header : 1 });
  //console.log("EXCEL TO JSON :::: LEAD DATA ::: " + JSON.stringify(leadsData));

  // Convert the array of arrays to an array of objects (if needed)
  const headers = contactsData[0];
  const data = contactsData.slice(1).map(row => {
    let obj = {};
    row.forEach((cell, i) => {
      obj[headers[i]] = cell;
    });
    return obj;
  });

  // Output the JavaScript object
  console.log("DATA :::: " + JSON.stringify(data));  
  // Optionally, save the JSON data to a file
  const jsonFilePath = './excel/json/contacts.json';
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

  //console.log(`JSON data has been saved to ${jsonFilePath}`);

}


const dealsJson = async () => {

  
  // Load Excel file
  const contactsPath = path.join(__dirname, './excel/deals.xlsx');
  const workbook = xlsx.readFile(contactsPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const dealsData = xlsx.utils.sheet_to_json(worksheet, { header : 1 });
  //console.log("EXCEL TO JSON :::: LEAD DATA ::: " + JSON.stringify(leadsData));

  // Output the JavaScript object
  console.log("DATA :::: " + JSON.stringify(dealsData));  
  // Optionally, save the JSON data to a file
  const jsonFilePath = './excel/json/deals.json';
  fs.writeFileSync(jsonFilePath, JSON.stringify(dealsData, null, 2));

  //console.log(`JSON data has been saved to ${jsonFilePath}`);

}


const dealStatisticsJson = async () => {

  
  // Load Excel file
  const dealsPath = path.join(__dirname, './excel/dealStatistics.xlsx');
  const workbook = xlsx.readFile(dealsPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const dealsData = xlsx.utils.sheet_to_json(worksheet, { header : 1 });
  //console.log("EXCEL TO JSON :::: LEAD DATA ::: " + JSON.stringify(leadsData));

  // Convert the array of arrays to an array of objects (if needed)
  const headers = dealsData[0];
  const data = dealsData.slice(1).map(row => {
    let obj = {};
    row.forEach((cell, i) => {
      obj[headers[i]] = cell;
    });
    return obj;
  });

  // Output the JavaScript object
  console.log("DATA :::: " + JSON.stringify(data));  
  // Optionally, save the JSON data to a file
  const jsonFilePath = './excel/json/dealStatistics.json';
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

  //console.log(`JSON data has been saved to ${jsonFilePath}`);

}

const agentJson = async () => {

  
  // Load Excel file
  const agentsPath = path.join(__dirname, './excel/agents.xlsx');
  const workbook = xlsx.readFile(agentsPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const agentsData = xlsx.utils.sheet_to_json(worksheet, { header : 1 });
  //console.log("EXCEL TO JSON :::: LEAD DATA ::: " + JSON.stringify(leadsData));

  // Convert the array of arrays to an array of objects (if needed)
  const headers = agentsData[0];
  const data = agentsData.slice(1).map(row => {
    let obj = {};
    row.forEach((cell, i) => {
      obj[headers[i]] = cell;
    });
    return obj;
  });

  // Output the JavaScript object
  console.log("DATA :::: " + JSON.stringify(data));  
  // Optionally, save the JSON data to a file
  const jsonFilePath = './excel/json/agents.json';
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

  //console.log(`JSON data has been saved to ${jsonFilePath}`);

}


const usersJson = async () => {

  
  // Load Excel file
  const usersPath = path.join(__dirname, './excel/users.xlsx');
  const workbook = xlsx.readFile(usersPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const usersData = xlsx.utils.sheet_to_json(worksheet, { header : 1 });
  //console.log("EXCEL TO JSON :::: LEAD DATA ::: " + JSON.stringify(leadsData));

  // Convert the array of arrays to an array of objects (if needed)
  const headers = usersData[0];
  const data = usersData.slice(1).map(row => {
    let obj = {};
    row.forEach((cell, i) => {
      obj[headers[i]] = cell;
    });
    return obj;
  });

  // Output the JavaScript object
  console.log("DATA :::: " + JSON.stringify(data));  
  // Optionally, save the JSON data to a file
  const jsonFilePath = './excel/json/users.json';
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

  //console.log(`JSON data has been saved to ${jsonFilePath}`);

}


const rolesJson = async () => {

  
  // Load Excel file
  const rolesPath = path.join(__dirname, './excel/roles.xlsx');
  const workbook = xlsx.readFile(rolesPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const rolesData = xlsx.utils.sheet_to_json(worksheet, { header : 1 });
  //console.log("EXCEL TO JSON :::: LEAD DATA ::: " + JSON.stringify(leadsData));

  // Convert the array of arrays to an array of objects (if needed)
  const headers = rolesData[0];
  const data = rolesData.slice(1).map(row => {
    let obj = {};
    row.forEach((cell, i) => {
      obj[headers[i]] = cell;
    });
    return obj;
  });

  // Output the JavaScript object
  console.log("DATA :::: " + JSON.stringify(data));  
  // Optionally, save the JSON data to a file
  const jsonFilePath = './excel/json/roles.json';
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

  //console.log(`JSON data has been saved to ${jsonFilePath}`);

}

//deleteLeads();
//uploadLeads();
//readLeads();
//leadsJson();
//contactsJson();

//dealsJson();
//dealStatisticsJson();

//agentJson();
rolesJson();

// Function to upload data to Firestore
const uploadProperties = async () => {

  
  // Load Excel file
  const propertiesPath = path.join(__dirname, './excel/properties.xlsx');
  const workbook = xlsx.readFile(propertiesPath);
  const sheetName = workbook.SheetNames[0]; // Use the first sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert Excel to JSON
  const propertiesData = xlsx.utils.sheet_to_json(worksheet);
  console.log("EXCEL TO JSON :::: PROPERTIES DATA ::: " + JSON.stringify(propertiesData));

  
  const collectionRef = db.collection('properties');
  //console.log("Collection Ref ::: " + JSON.stringify(collectionRef));

  for (let i = 0; i < propertiesData.length; i++) {
    
    try {
      const property = propertiesData[i];
      console.log("PROPERTY ITERATION RECORD ::: " + JSON.stringify(property));

      await collectionRef.add(property);
      console.log(`Property ${i + 1} added successfully`);
    } catch (error) {
      console.error(`Error adding document ${i + 1}:`, error);
    }
  }

  console.log('Property Data upload complete.');
};

const readProperties = async () => {
  const snapshot = await db.collection('properties').get();
  
  snapshot.forEach((doc) => {
    console.log("PROPERTY ID :: " + `${doc.id}`);
    console.log("PROPERTY DATA :: " + JSON.stringify(doc.data()));
  });
}

const deleteProperties = async () => { 
  const snapshot = await db.collection('properties').get();
  
  snapshot.forEach((doc) => {
    console.log("PROPERTY ID :: " + `${doc.id}`);
    console.log("PROPERTY DATA :: " + JSON.stringify(doc.data()));
  
    db.collection('properties').doc(doc.id).delete().then(() => {
      console.log("Property ID DELETED :: " + `${doc.id}`);
    });

  });
}

//deleteProperties();
//uploadProperties();
//readProperties();
