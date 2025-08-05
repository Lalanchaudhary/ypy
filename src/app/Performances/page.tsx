import React from "react";
import Image from "next/image";
import rahul from '../../assets/rahul.png'
// Extended toppers data organized by year only
const performanceData = {
  "2024": [
    {
      name: "Amit Kumar",
      photo: rahul,
      achievement: "JEE Mains 2024 - 98.5 Percentile",
      rollCode: "JEE2024",
      rollNumber: "A001",
      details: {
        jeeMains: "98.5%",
        jeeAdvanced: "AIR 2456",
        board12th: "95.2%",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        coachingDuration: "2 years",
        batch: "JEE 2024"
      }
    },
    {
      name: "Rahul Sharma",
      photo: rahul,
      achievement: "JEE Mains 2024 - 97.8 Percentile",
      rollCode: "JEE2024",
      rollNumber: "R002",
      details: {
        jeeMains: "97.8%",
        board12th: "93.5%",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        coachingDuration: "1.5 years",
        batch: "JEE 2024"
      }
    },
    {
      name: "Vikram Patel",
      photo:rahul,
      achievement: "JEE Advanced - AIR 1890",
      rollCode: "JEEADV",
      rollNumber: "V203",
      details: {
        jeeAdvanced: "AIR 1890",
        jeeMains: "99.2%",
        board12th: "94.5%",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        coachingDuration: "2.5 years",
        batch: "JEE Advanced 2024"
      }
    },
    {
      name: "Anjali Sharma",
      photo: rahul,
      achievement: "NEET 2024 - AIR 1245",
      rollCode: "NEET24",
      rollNumber: "A156",
      details: {
        neet: "AIR 1245",
        board12th: "96.8%",
        biology: "98/100",
        chemistry: "95/100",
        physics: "94/100",
        subjects: ["Biology", "Chemistry", "Physics"],
        coachingDuration: "2 years",
        batch: "NEET 2024"
      }
    },
    {
      name: "Priya Singh",
      photo:rahul,
      achievement: "CBSE 12th - 97% in Mathematics",
      rollCode: "CBSE12",
      rollNumber: "P045",
      details: {
        board12th: "97%",
        mathematics: "99/100",
        physics: "96/100",
        chemistry: "95/100",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        coachingDuration: "1.5 years",
        batch: "CBSE 12th 2024"
      }
    },
    {
      name: "Sneha Reddy",
      photo: rahul,
      achievement: "CBSE 10th - 98.2% Overall",
      rollCode: "CBSE10",
      rollNumber: "S089",
      details: {
        board10th: "98.2%",
        mathematics: "98/100",
        science: "99/100",
        english: "97/100",
        subjects: ["Mathematics", "Science", "English"],
        coachingDuration: "1 year",
        batch: "CBSE 10th 2024"
      }
    },
    {
      name: "Rahul Verma",
      photo:rahul,
      achievement: "JAC 10th Topper - 99/100 in Maths",
      rollCode: "JAC10",
      rollNumber: "R078",
      details: {
        board10th: "98.5%",
        mathematics: "99/100",
        science: "97/100",
        socialStudies: "98/100",
        subjects: ["Mathematics", "Science", "Social Studies"],
        coachingDuration: "1 year",
        batch: "JAC 10th 2024"
      }
    }
  ],
  "2023": [
    {
      name: "Arjun Singh",
      photo:rahul,
      achievement: "JEE Mains 2023 - 99.1 Percentile",
      rollCode: "JEE2023",
      rollNumber: "A101",
      details: {
        jeeMains: "99.1%",
        jeeAdvanced: "AIR 1567",
        board12th: "96.8%",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        coachingDuration: "2 years",
        batch: "JEE 2023"
      }
    },
    {
      name: "Kavya Patel",
      photo:rahul,
      achievement: "NEET 2023 - AIR 892",
      rollCode: "NEET23",
      rollNumber: "K203",
      details: {
        neet: "AIR 892",
        board12th: "97.2%",
        biology: "99/100",
        chemistry: "96/100",
        physics: "95/100",
        subjects: ["Biology", "Chemistry", "Physics"],
        coachingDuration: "2.5 years",
        batch: "NEET 2023"
      }
    },
    {
      name: "Aditya Kumar",
      photo: rahul,
      achievement: "CBSE 12th - 98.5% Overall",
      rollCode: "CBSE12",
      rollNumber: "A305",
      details: {
        board12th: "98.5%",
        mathematics: "99/100",
        physics: "98/100",
        chemistry: "98/100",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        coachingDuration: "1.5 years",
        batch: "CBSE 12th 2023"
      }
    }
  ]
};

const PerformancesPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
        {/* Header */}
        <section className="pt-24 pb-4 lg:pb-16 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center  mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Student Performances
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the remarkable achievements of our students across various competitive exams and board examinations.
              </p>
            </div>
          </div>
        </section>

        {/* Year-wise Performance Sections */}
        {Object.entries(performanceData).reverse().map(([year, students]) => (
          <section key={year} className="py-16 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                {year} Achievements
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {students.map((student: any, idx: number) => (
                  <div key={idx} className="group relative bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center w-full max-w-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Top Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    
                    {/* Student Photo with Enhanced Styling */}
                    <div className="relative mb-6">
                      <div className="w-64 h-64 rounded-xl overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <div className="w-full h-full rounded-xl overflow-hidden">
                          <Image
                            src={student.photo}
                            alt={student.name}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      
                    </div>
                    
                    {/* Student Name with Enhanced Typography */}
                    <div className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {student.name}
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3 text-sm">
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                    Roll Code: {student.rollCode}
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                    Roll No: {student.rollNumber}
                  </div>
                </div>
                    
                    {/* Achievement with Enhanced Styling */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-center leading-tight px-6 py-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {student.achievement}
                    </div>
                    
                    {/* Bottom Decorative Elements */}
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"></div>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default PerformancesPage; 