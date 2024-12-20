// import React from 'react'

import FadeIn from "./FadeIn";

interface ChangelogTableProps {
  setIsVisible: (value: boolean) => void;
}

const ChangelogTable: React.FC<ChangelogTableProps> = ({setIsVisible}) => {
  return (
    <FadeIn>
      <div className="flex justify-center flex-col pb-14 md:px-12">
        <h3 className="text-[48px] text-slate-900 font-bold md:mt-0 mt-20 mb-4">
          Versions
        </h3>

        <table className="customfont-base text-slate-900 text-left md:text-lg text-[8px] overflow-auto">
          <thead className="bg-sky-100 rounded-xl">
            <tr>
              <th className="bg-sky-100 rounded-s-full py-4 pl-6">Version</th>
              <th>Date</th>
              <th>Package Name</th>
              <th>Status</th>
              <th className="bg-sky-100 rounded-e-full py-4">Info</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='pl-6'>v1.0</td>
              <td>30/11/2023</td>
              <td>com.dashnyam.inxta</td>
              <td className="text-green-700 py-4">Current</td>
              <td className="text-slate-100">
                <button
                  className="bg-zinc-700 rounded-lg md:border-4 border-2 border-zinc-700 md:px-4 px-2 py-1 transition ease duration-150"
                  onClick={() => setIsVisible(true)}
                >
                  Changelog
                </button>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </FadeIn>
  )
}

export default ChangelogTable