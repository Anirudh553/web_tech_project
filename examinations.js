import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Monitor } from 'lucide-react';

const ExamSchedule = () => {
  const examData = [
    {
      subject: 'Digital Design and Computer Organization (DDCO)',
      date: '2024-12-10',
      time: '9:30 AM - 12:30 PM',
      node: 3,
      terminals: [12, 13, 14, 15, 16, 17],
      examCode: 'CS301'
    },
    {
      subject: 'Automata Formal Languages and Logic (AFLL)',
      date: '2024-12-12',
      time: '1:30 PM - 4:30 PM',
      node: 7,
      terminals: [1, 2, 3, 4, 5, 6, 7, 8],
      examCode: 'CS302'
    },
    {
      subject: 'Web Technologies (WT)',
      date: '2024-12-14',
      time: '9:30 AM - 12:30 PM',
      node: 11,
      terminals: [45, 46, 47, 48, 49, 50],
      examCode: 'CS303'
    },
    {
      subject: 'Mathematical Computing with Software Engineering (MCSE)',
      date: '2024-12-16',
      time: '1:30 PM - 4:30 PM',
      node: 5,
      terminals: [20, 21, 22, 23, 24, 25],
      examCode: 'CS304'
    },
    {
      subject: 'Data Structures and Algorithms (DSA)',
      date: '2024-12-18',
      time: '9:30 AM - 12:30 PM',
      node: 9,
      terminals: [31, 32, 33, 34, 35],
      examCode: 'CS305'
    }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800">End Semester Examination Schedule</CardTitle>
        <p className="text-sm text-gray-600 mt-2">December 2024 Series</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {examData.map((exam, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{exam.subject}</h3>
                      <p className="text-sm text-gray-600">Code: {exam.examCode}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">
                        <span className="inline-block w-20">Date:</span>
                        <span className="text-gray-700">
                          {new Date(exam.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </p>
                      <p className="text-sm font-medium">
                        <span className="inline-block w-20">Time:</span>
                        <span className="text-gray-700">{exam.time}</span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 bg-black text-white p-3 rounded-md">
                      <Monitor size={20} />
                      <div>
                        <p className="text-sm font-medium">Node {exam.node}</p>
                        <p className="text-xs">Terminals: {exam.terminals.join(', ')}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      * Please arrive 30 minutes before the scheduled time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-semibold text-sm mb-2">Important Instructions:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Bring your University ID card and Hall ticket</li>
            <li>• Use of programmable calculators is not permitted</li>
            <li>• Electronic devices are strictly prohibited</li>
            <li>• Report to your assigned node and terminal 30 minutes before exam time</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamSchedule;
