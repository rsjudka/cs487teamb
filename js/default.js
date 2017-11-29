// var classes = [
//     {
//       "subject": "COM",
//       "course": 421,
//       "title": "Technical Communication",
//       "sections": [
//         {
//           "CRN": 21008,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               3
//             ],
//             "tuesday": [],
//             "wednesday": [
//               3
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Andrew J Roback"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 115,
//       "title": "Object-Oriented Programming I",
//       "sections": [
//         {
//           "CRN": 20024,
//           "section": "01",
//           "location": "MC",
//           "credits": 2,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               1
//             ],
//             "tuesday": [],
//             "wednesday": [
//               1
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 23963,
//           "professor": "Jon Hanrath"
//         },
//         {
//           "CRN": 23963,
//           "section": "L01",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [
//               1
//             ],
//             "saturday": []
//           },
//           "classType": "shortened",
//           "requires": 20024,
//           "professor": "Jon Hanrath"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 116,
//       "title": "Object-Oriented Programming II",
//       "sections": [
//         {
//           "CRN": 29929,
//           "section": "03",
//           "location": "MC",
//           "credits": 2,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               5
//             ],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 29930,
//           "professor": "John Korah"
//         },
//         {
//           "CRN": 29930,
//           "section": "L05",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               6
//             ],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 29929,
//           "professor": "John Korah"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 330,
//       "title": "Discrete Structures",
//       "sections": [
//         {
//           "CRN": 20030,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               1
//             ],
//             "wednesday": [],
//             "thursday": [
//               1
//             ],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 28856,
//           "professor": "Rajkumar Venka Pandiyampalayam"
//         },
//         {
//           "CRN": 28856,
//           "section": "R01",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [
//               1
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "shortened",
//           "requires": 20030,
//           "professor": "Rajkumar Venka Pandiyampalayam"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 331,
//       "title": "Data Structures and Algorithms",
//       "sections": [
//         {
//           "CRN": 20031,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               2
//             ],
//             "tuesday": [],
//             "wednesday": [
//               2
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 24121,
//           "professor": "Matthew J Bauer"
//         },
//         {
//           "CRN": 28165,
//           "section": "02",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [
//               3
//             ],
//             "thursday": [],
//             "friday": [
//               3
//             ],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 29605,
//           "professor": "Michael Kamol Saelee"
//         },
//         {
//           "CRN": 24121,
//           "section": "L01",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [
//               2
//             ],
//             "saturday": []
//           },
//           "classType": "shortened",
//           "requires": 20031,
//           "professor": "Matthew J Bauer"
//         },
//         {
//           "CRN": 29605,
//           "section": "L03",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               3
//             ],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "shortened",
//           "requires": 28165,
//           "professor": "Michael Kamol Saelee"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 350,
//       "title": "Computer Organization and Assembly Language Programming",
//       "sections": [
//         {
//           "CRN": 20033,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               4
//             ],
//             "tuesday": [],
//             "wednesday": [
//               4
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 22642,
//           "professor": "Kyle C Hale"
//         },
//         {
//           "CRN": 22642,
//           "section": "L01",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [
//               4
//             ],
//             "saturday": []
//           },
//           "classType": "shortened",
//           "requires": 20033,
//           "professor": "Kyle C Hale"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 351,
//       "title": "Systems Programming",
//       "sections": [
//         {
//           "CRN": 20034,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [
//               4
//             ],
//             "thursday": [],
//             "friday": [
//               4
//             ],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 23001,
//           "professor": "Michael Kamol Saelee"
//         },
//         {
//           "CRN": 23001,
//           "section": "L01",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               1
//             ],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "shortened",
//           "requires": 20034,
//           "professor": "Michael Kamol Saelee"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 422,
//       "title": "Data Mining",
//       "sections": [
//         {
//           "CRN": 28859,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               6,
//               7
//             ],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Vijay Kumar Gurbani"
//         },
//         {
//           "CRN": 28860,
//           "section": "02",
//           "location": "IN",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               6,
//               7
//             ],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Vijay Kumar Gurbani"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 425,
//       "title": "Database Organization",
//       "sections": [
//         {
//           "CRN": 20044,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [
//               6,
//               7
//             ],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Omar Aldawud"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 429,
//       "title": "Information Retrieval",
//       "sections": [
//         {
//           "CRN": 24124,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               5,
//               6
//             ],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "John Korah"
//         },
//         {
//           "CRN": 24126,
//           "section": "02",
//           "location": "IN",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               5,
//               6
//             ],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "John Korah"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 430,
//       "title": "Introduction to Algorithms",
//       "sections": [
//         {
//           "CRN": 20047,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               2
//             ],
//             "tuesday": [],
//             "wednesday": [
//               2
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 28173,
//           "professor": "Edward M Reingold"
//         },
//         {
//           "CRN": 28173,
//           "section": "R01",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [
//               2
//             ],
//             "saturday": []
//           },
//           "classType": "shortened",
//           "requires": 20047,
//           "professor": "Edward M Reingold"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 485,
//       "title": "Computers and Society",
//       "sections": [
//         {
//           "CRN": 20068,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               0
//             ],
//             "tuesday": [],
//             "wednesday": [
//               0
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Jon Hanrath"
//         },
//         {
//           "CRN": 28868,
//           "section": "02",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               2
//             ],
//             "tuesday": [],
//             "wednesday": [
//               2
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Jon Hanrath"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 440,
//       "title": "Programming Languages and Translators",
//       "sections": [
//         {
//           "CRN": 28862,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               3
//             ],
//             "tuesday": [],
//             "wednesday": [
//               3
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "James T Sasaki"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 450,
//       "title": "Operating Systems",
//       "sections": [
//         {
//           "CRN": 20059,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               1
//             ],
//             "tuesday": [],
//             "wednesday": [
//               1
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Wu-Hon Francis Leung"
//         },
//         {
//           "CRN": 20061,
//           "section": "02",
//           "location": "IN",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               1
//             ],
//             "tuesday": [],
//             "wednesday": [
//               1
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Wu-Hon Francis Leung"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 487,
//       "title": "Software Engineering",
//       "sections": [
//         {
//           "CRN": 20069,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               1
//             ],
//             "wednesday": [],
//             "thursday": [
//               1
//             ],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Dennis J Hood"
//         },
//         {
//           "CRN": 28869,
//           "section": "02",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               3
//             ],
//             "wednesday": [],
//             "thursday": [
//               3
//             ],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Dennis J Hood"
//         },
//         {
//           "CRN": 20071,
//           "section": "03",
//           "location": "IN",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               3
//             ],
//             "wednesday": [],
//             "thursday": [
//               3
//             ],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Dennis J Hood"
//         }
//       ]
//     },
//     {
//       "subject": "CS",
//       "course": 513,
//       "title": "Geospatial Vision and Visualization",
//       "sections": [
//         {
//           "CRN": 27388,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [
//               6,
//               7
//             ],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Xin Chen"
//         }
//       ]
//     },
//     {
//       "subject": "CHEM",
//       "course": 122,
//       "title": "Principles of Chemistry I Without Laboratory",
//       "sections": [
//         {
//           "CRN": 20001,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               0
//             ],
//             "tuesday": [],
//             "wednesday": [
//               0
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "David Minh"
//         }
//       ]
//     },
//     {
//       "subject": "HIST",
//       "course": 340,
//       "title": "Rise of Global Economy",
//       "sections": [
//         {
//           "CRN": 25560,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               0
//             ],
//             "tuesday": [],
//             "wednesday": [
//               0
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Val Jason Martin"
//         }
//       ]
//     },
//     {
//       "subject": "MATH",
//       "course": 251,
//       "title": "Multivariate and Vector Calculus",
//       "sections": [
//         {
//           "CRN": 20164,
//           "section": "02",
//           "location": "MC",
//           "credits": 4,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               3
//             ],
//             "tuesday": [],
//             "wednesday": [
//               3
//             ],
//             "thursday": [],
//             "friday": [
//               3
//             ],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Jesus Miranda"
//         }
//       ]
//     },
//     {
//       "subject": "MATH",
//       "course": 333,
//       "title": "Matrix Algebra and Complex Variables",
//       "sections": [
//         {
//           "CRN": 20619,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               2
//             ],
//             "tuesday": [],
//             "wednesday": [
//               2
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Arthur R. Lubin"
//         },
//         {
//           "CRN": 29496,
//           "section": "02",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               6
//             ],
//             "tuesday": [],
//             "wednesday": [
//               6
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Arthur R. Lubin"
//         }
//       ]
//     },
//     {
//       "subject": "MATH",
//       "course": 474,
//       "title": "Probability and Statistics",
//       "sections": [
//         {
//           "CRN": 20171,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               0
//             ],
//             "wednesday": [],
//             "thursday": [
//               0
//             ],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Despina Stasi"
//         }
//       ]
//     },
//     {
//       "subject": "PHYS",
//       "course": 221,
//       "title": "General Physics II: Electricity and Magnetism",
//       "sections": [
//         {
//           "CRN": 20204,
//           "section": "01",
//           "location": "MC",
//           "credits": 4,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               3
//             ],
//             "tuesday": [],
//             "wednesday": [
//               3
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 20205,
//           "professor": "Alan Glodowski"
//         },
//         {
//           "CRN": 20208,
//           "section": "02",
//           "location": "MC",
//           "credits": 4,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               3
//             ],
//             "wednesday": [],
//             "thursday": [
//               3
//             ],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 20207,
//           "professor": "Yagmur Torun"
//         },
//         {
//           "CRN": 28210,
//           "section": "03",
//           "location": "MC",
//           "credits": 4,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               2
//             ],
//             "wednesday": [],
//             "thursday": [
//               2
//             ],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 28211,
//           "professor": "Pavel Snopok"
//         },
//         {
//           "CRN": 20205,
//           "section": "L01",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               0,1
//             ],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 20204,
//           "professor": "Alan Glodowski"
//         },
//         {
//           "CRN": 20207,
//           "section": "L04",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [
//               6,7
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 20208,
//           "professor": "Yagmur Torun"
//         },
//         {
//           "CRN": 28211,
//           "section": "L05",
//           "location": "MC",
//           "credits": 0,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [
//               0,1
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": 28210,
//           "professor": "Pavel Snopok"
//         }
//       ]
//     },
//     {
//       "subject": "PSYC",
//       "course": 301,
//       "title": "Industrial Psychology",
//       "sections": [
//         {
//           "CRN": 20953,
//           "section": "01",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               2
//             ],
//             "tuesday": [],
//             "wednesday": [
//               2
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Mahima Saxena"
//         },
//         {
//           "CRN": 20954,
//           "section": "02",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [
//               4
//             ],
//             "tuesday": [],
//             "wednesday": [
//               4
//             ],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Mahima Saxena"
//         },
//         {
//           "CRN": 28221,
//           "section": "04",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               4
//             ],
//             "wednesday": [],
//             "thursday": [
//               4
//             ],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Kristina Bauer"
//         }
//       ]
//     },
//     {
//       "subject": "BIOL",
//       "course": 426,
//       "title": "Concepts of Cancer Biology",
//       "sections": [
//         {
//           "CRN": 29926,
//           "section": "01",
//           "location": "MC",
//           "credits": 4,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [
//               5,6
//             ],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Genoveva Murillo"
//         }
//       ]
//     },
//     {
//       "subject": "IPRO",
//       "course": 397,
//       "title": "Interprofessional by Design",
//       "sections": [
//         {
//           "CRN": 24472,
//           "section": "100",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [
//               3,4
//             ],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Thomas Brandenburg"
//         },
//         {
//           "CRN": 24473,
//           "section": "200",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [
//               1,2
//             ],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "James Braband"
//         },
//         {
//           "CRN": 26746,
//           "section": "300",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [
//               1,2
//             ],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Kristina Bauer"
//         },
//         {
//           "CRN": 27365,
//           "section": "500",
//           "location": "MC",
//           "credits": 3,
//           "timeSlots": {
//             "sunday": [],
//             "monday": [],
//             "tuesday": [
//               3,4
//             ],
//             "wednesday": [],
//             "thursday": [],
//             "friday": [],
//             "saturday": []
//           },
//           "classType": "normal",
//           "requires": null,
//           "professor": "Limia Shunia"
//         }
//       ]
//     }
//   ];
// var professors = [
//     {
//       "professor": "Wu-Hon Francis Leung",
//       "rating": 2.6,
//       "difficulty": 3.4
//     },
//     {
//       "professor": "James T Sasaki",
//       "rating": 2.8,
//       "difficulty": 3.1
//     },
//     {
//       "professor": "Jesus Miranda",
//       "rating": 3.8,
//       "difficulty": 2.1
//     },
//     {
//       "professor": "Mahima Saxena",
//       "rating": 3.4,
//       "difficulty": 2.6
//     },
//     {
//       "professor": "Kristina Bauer",
//       "rating": 3.7,
//       "difficulty": 3.5
//     },
//     {
//       "professor": "Andrew J Roback",
//       "rating": 4.0,
//       "difficulty": 2.0
//     },
//     {
//       "professor": "Dennis J Hood",
//       "rating": 2.4,
//       "difficulty": 3.3
//     },
//     {
//       "professor": "Jon Hanrath",
//       "rating": 4.6,
//       "difficulty": 2.0
//     },
//     {
//       "professor": "John Korah",
//       "rating": 3.0,
//       "difficulty": 3.0
//     },
//     {
//       "professor": "Rajkumar Venka Pandiyampalayam",
//       "rating": 2.5,
//       "difficulty": 2.5
//     },
//     {
//       "professor": "Matthew J Bauer",
//       "rating": 4.0,
//       "difficulty": 2.7
//     },
//     {
//       "professor": "Michael Kamol Saelee",
//       "rating": 4.3,
//       "difficulty": 3.2
//     },
//     {
//       "professor": "Kyle C Hale",
//       "rating": 5.0,
//       "difficulty": 4.2
//     },
//     {
//       "professor": "Omar Aldawud",
//       "rating": 2.4,
//       "difficulty": 2.5
//     },
//     {
//       "professor": "Edward M Reingold",
//       "rating": 3.0,
//       "difficulty": 4.4
//     },
//     {
//       "professor": "Vijay K Gurbani",
//       "rating": 4.5,
//       "difficulty": 2.7
//     },
//     {
//       "professor": "Xin Chen",
//       "rating": 5.0,
//       "difficulty": 1.5
//     }
//   ];
// var params = {
//     credits: 5,
//     difficulty: 0,
//     times: [true, true, false, false, false],
//     optimize: [true, false, false, true, true]};
// var picks = [
//     classes[0], classes[6], classes[8], classes[7], classes[18], classes[17], classes[16], classes[10]
// ]
function generateSchedule(classes, professors, params) {
    var sortedClasses = sortTimes(classes, params);
    var scheduleData = addClasses(sortedClasses, params, totalCredits);
    var classList = scheduleData[0];
    var totalCredits = scheduleData[1];
    // console.log(classList);
    // console.log(totalCredits);

    var finalSchedule = createSchedule(classList, totalCredits);
    return finalSchedule;
}

function createSchedule(classList, totalCredits) {
    var finalSchedule = {
        name: "Untitled Schedule",
        savedTime: "Not Saved",
        creditHours: totalCredits,
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: []
    };
    for (var i = 0; i < classList.length; i++) {
        var c = classList[i];
        var ts = c['timeSlots'];
        for (var t in ts) {
            if (ts[t].length > 0) {
                var cc = finalClass(c, ts[t]);
                finalSchedule[t].push(cc);
            }
        }
    }
    return finalSchedule;
}

function finalClass(c, t) {
    cTitle = c['title'];
    if (c['section'][0] == 'R') {
        cTitle = '(Recitation) ' + c['title'];
    }
    else if (c['section'][0] == 'L') {
        cTitle = '(Lab) ' + c['title'];
    }
    return {
        title: cTitle,
        subject: c['subject'],
        course: c['course'],
        CRN: c['CRN'],
        section: c['section'],
        location: c['location'],
        credits: c['credits'],
        timeSlot: t,
        classType: c['classType'],
        requires: c['requires'],
        professor: c['professor']
    }
}

function addClasses(classes, params) {
    var creditsIdx = {0: [3,6], 1: [6,9], 2: [9,12], 3: [12,15], 4: [15,18], 5: [18,21], 6: [0,18]};    
    var chosenClasses = [];
    var credits = 0;
    for (var i = 0; i < classes.length; i++) {
        addCredits = credits + classes[i]['credits'];
        if (addCredits <= creditsIdx[params['credits']][1]) {
            if (classes[i]['requires'] == null) {
                if (checkTimeConflict(classes[i], chosenClasses)) {
                    chosenClasses.push(classes[i]);
                    credits = addCredits;
                }
            }
            else {
                if (checkTimeConflict(classes[i], chosenClasses) && checkTimeConflict(classes[i+1], chosenClasses)) {
                    chosenClasses.push(classes[i]);
                    chosenClasses.push(classes[i+1]);
                    credits = addCredits;
                }
                i++;
            }
        }
    }
    return [chosenClasses, credits];
}

function checkTimeConflict(currentSection, chosenClasses) {
    var currentSectionTimes = currentSection['timeSlots'];
    for (var i = 0; i < chosenClasses.length; i++) {
        var chosenClassTimes = chosenClasses[i]['timeSlots'];
        if (compareTimes(currentSectionTimes['sunday'], chosenClassTimes['sunday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['monday'], chosenClassTimes['monday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['tuesday'], chosenClassTimes['tuesday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['wednesday'], chosenClassTimes['wednesday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['thursday'], chosenClassTimes['thursday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['friday'], chosenClassTimes['friday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['saturday'], chosenClassTimes['saturday'])) {
            return false;
        }
    }
    return true;
}

function compareTimes(current, chosen) {
    if (current.length > 0 && chosen.length > 0) {
        var i = current.length;
        if (i != chosen.length) return false;
        while (i--) {
            if (current[i] !== chosen[i]) return false;
        }
        return true;
    }
    return false;
}

function sortTimes(classes, params) {
    var ac = JSON.parse(JSON.stringify(classes));
    var sortedClasses = [];
    if (params['optimize'][3]) {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                if (section['location'] == 'IN' && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                    sortedClasses.push(createClass(tmpAC[i], section));
                    if (section['requires'] != null) {
                        var requiredSection = findRequired(tmpAC[i], section['requires']);
                        sortedClasses.push(createClass(tmpAC[i], requiredSection));
                    }
                    ac[i]['sections'].splice(j, 1);
                }
            }
        }
    }
    if (params['times'][0]) {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                var timesOption = false;
                for (day in section['timeSlots']) {
                    dayArr = section['timeSlots'][day];
                    for (var d = 0; d < dayArr.length; d++) {
                        if (dayArr[d] < 3 && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                            timesOption = true;
                        }
                        else {
                            timesOption = false;
                        }
                    }
                }
                if (timesOption) {
                    sortedClasses.push(createClass(tmpAC[i], section));
                    if (section['requires'] != null) {
                        requiredSection = findRequired(tmpAC[i], section['requires']);
                        sortedClasses.push(createClass(tmpAC[i], requiredSection));
                    }        
                    ac[i]['sections'].splice(j, 1);
                }
            }
        }
    }
    if (params['times'][1]) {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                var timesOption = false;
                for (day in section['timeSlots']) {
                    dayArr = section['timeSlots'][day];
                    for (var d = 0; d < dayArr.length; d++) {
                        if ((dayArr[d] > 2 && dayArr[d] < 5) && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                            timesOption = true;
                        }
                        else {
                            timesOption = false;
                        }
                    }
                }
                if (timesOption) {
                    sortedClasses.push(createClass(tmpAC[i], section));
                    if (section['requires'] != null) {
                        requiredSection = findRequired(tmpAC[i], section['requires']);
                        sortedClasses.push(createClass(tmpAC[i], requiredSection));
                    }        
                    ac[i]['sections'].splice(j, 1);
                }
            }
        }
    }
    if (params['times'][2]) {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                var timesOption = false;
                for (day in section['timeSlots']) {
                    dayArr = section['timeSlots'][day];
                    for (var d = 0; d < dayArr.length; d++) {
                        if ((dayArr[d] > 4 && dayArr[d] < 7) && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                            timesOption = true;
                        }
                        else {
                            timesOption = false;
                        }
                    }
                }
                if (timesOption) {
                    sortedClasses.push(createClass(tmpAC[i], section));
                    if (section['requires'] != null) {
                        requiredSection = findRequired(tmpAC[i], section['requires']);
                        sortedClasses.push(createClass(tmpAC[i], requiredSection));
                    }        
                    ac[i]['sections'].splice(j, 1);
                }
            }
        }
    }
    if (params['times'][3]) {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                var timesOption = false;
                for (day in section['timeSlots']) {
                    dayArr = section['timeSlots'][day];
                    for (var d = 0; d < dayArr.length; d++) {
                        if (dayArr[d] > 6 && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                            timesOption = true;
                        }
                        else {
                            timesOption = false;
                        }
                    }
                }
                if (timesOption) {
                    sortedClasses.push(createClass(tmpAC[i], section));
                    if (section['requires'] != null) {
                        requiredSection = findRequired(tmpAC[i], section['requires']);
                        sortedClasses.push(createClass(tmpAC[i], requiredSection));
                    }        
                    ac[i]['sections'].splice(j, 1);
                }
            }
        }
    }
    for (var i = 0; i < ac.length; i++) {
        for (var j = 0; j < ac[i]['sections'].length; j++) {
            var section = ac[i]['sections'][j];
            if (!(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {                
                sortedClasses.push(createClass(ac[i], section));
                if (section['requires'] != null) {
                    requiredSection = findRequired(ac[i], section['requires']);
                    sortedClasses.push(createClass(ac[i], requiredSection));
                } 
            }  
        }
    }
    return sortedClasses;
}

function findRequired(c, crn) {
    for (var i = 0; i < c['sections'].length; i++) {
        if (c['sections'][i]['CRN'] == crn) {
            return c['sections'][i];
        }
    }
}

function sortOtherParams(classes, professors, params) {
    var ac = JSON.parse(JSON.stringify(classes));    
    var profs = ratedProfessors(professors);
}

function ratedProfessors(professors) {
    rated = {};
    for (var i = 0; i < professors.length; i++) {
        rating = professors[i]['rating'];
        difficulty = professors[i]['difficulty'];
        popularity = (rating + difficulty) / 2;
        rated[professors[i]['professor']] = [rating, difficulty, popularity];
    }
    return rated;
}

function createClass(c, s) {
    return {
        title: c['title'],
        subject: c['subject'],
        course: c['course'],
        CRN: s['CRN'],
        section: s['section'],
        location: s['location'],
        credits: s['credits'],
        timeSlots: s['timeSlots'],
        classType: s['classType'],
        requires: s['requires'],
        professor: s['professor']
    }
}

// var schedule = generateSchedule(picks, professors, params);
// console.log(schedule);