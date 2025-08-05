import React from "react";

const runningBatches = [
  {
    name: "JAC 12th BOARD 2024",
    time: "Mon-Fri, 3:00 PM - 4:00 PM",
    teacher: "Satendar",
    room: "Room 101",
  },
  {
    name: "JAC 12th BOARD 2024",
    time: "Mon-Fri, 4:00 PM - 5:00 PM",
    teacher: "Satendar",
    room: "Room 101",
  },
];

const upcomingBatches = [
  {
    name: "JAC 12th BOARD 2024",
    time: "Mon-Fri, 5:00 PM - 6:00 AM",
    teacher: "Satendar",
    room: "Room 101",
  },
  {
    name: "JAC 12th BOARD 2024",
    time: "Mon-Fri, 6:00 PM - 7:00 AM",
    teacher: "Satendar",
    room: "Room 101",
  },
];

const BatchCard = ({ batch }: { batch: typeof runningBatches[0] }) => (
  <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2 border hover:shadow-lg transition">
    <div className="font-bold text-blue-700 text-lg">{batch.name}</div>
    <div className="text-gray-600 text-sm">{batch.time}</div>
    <div className="flex justify-between text-xs text-gray-500 mt-2">
      <span>Teacher: {batch.teacher}</span>
      <span>Room: {batch.room}</span>
    </div>
  </div>
);

const BatchTime = () => {
    return (
      <section className="w-full py-12 px-4 max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200 shadow-2xl border-2 border-blue-300 relative overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none select-none" />
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center relative z-10">Batch Timings</h2>
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {/* Running Batches */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-4">Running Batches</h3>
            <div className="space-y-4">
              {runningBatches.map((batch, idx) => (
                <BatchCard batch={batch} key={idx} />
              ))}
              {runningBatches.length === 0 && (
                <div className="text-gray-400 text-sm">No running batches at the moment.</div>
              )}
            </div>
          </div>
          {/* Upcoming Batches */}
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Upcoming Batches</h3>
            <div className="space-y-4">
              {upcomingBatches.map((batch, idx) => (
                <BatchCard batch={batch} key={idx} />
              ))}
              {upcomingBatches.length === 0 && (
                <div className="text-gray-400 text-sm">No upcoming batches at the moment.</div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
export default BatchTime;