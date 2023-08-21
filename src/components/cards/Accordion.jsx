import accordionData from '../../apis/accordionData.js';
import { useState } from 'react';
import "../../custom.css"

function Accordion() {
      const [select, setSelect] = useState(null)
      // const [height, setHeight] = useState('none')

    function clickOpen(index){
        setSelect(index === select ? null : index);
    }

  return (
    <main>
      <div className="w-[90%] font-medium tracking-wide font-raleway text-white">
        {accordionData.map((item, index) => (
          <>
            <div key={index} className="mb-3">
              <div
                className="flex justify-between bg-zinc-800 hover:bg-zinc-500 w-full h-full cursor-pointer transition-all duration-300 ease-linear py-4 px-12 select-none"
                onClick={() => clickOpen(index)}
              >
                <h2 className="">{item.heading}</h2>
                <span className="text-2xl">{select === index ? '-' : '+'}</span>
              </div>

              {select === index && (
                <div className="py-3 px-12 bg-zinc-900 transition-all duration-1000">
                  {item.body}
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </main>
  );
}

export default Accordion;
