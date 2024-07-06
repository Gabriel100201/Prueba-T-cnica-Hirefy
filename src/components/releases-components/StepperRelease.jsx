import releaseInfo from '../../data/Releases.json';

export const StepperRelease = () => {
  return (
    <section className="w-full px-[54px] text-alternative">
      <ol className="relative border-s border-primary">
        {releaseInfo &&
          releaseInfo.map((item, index) => {
            let statusClass = '';
            if (item.status === 'Feat') {
              statusClass = 'bg-chipFeatBg text-chipFeatText';
            } else if (item.status === 'Fix') {
              statusClass = 'bg-chipFixBg text-chipFixText';
            }

            return (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute w-[18px] h-[18px] bg-primary rounded-full -start-[9px] border border-primary"></div>
                <h3 className="text-lg font-semibold ml-[5px] xl:text-[40px] leading-[36px] xl:font-[400]">{item.label}</h3>  
                <div className="my-[24px] flex gap-[10px] items-center">
                  <span className={`rounded-[20px] font-bold px-[16px] py-[4px] ${statusClass}`}>{item.status}</span>
                  <span className='text-[#7D879C] text-[14px]'>{item.date}</span>
                </div>
                <p className="mb-4 text-base font-normal text-[#7D879C] xl:font-[600]">{item.text}</p>
                {item.items && (
                  <ul className='list-disc ml-8 mb-4'>{
                    item.items.map((el, index) => {
                      return (  
                        <li className='text-[#2B3445]' key={index}>{el}</li>
                      )
                    })
                  }
                  </ul>
                )}
                {item.img && <img src={item.img} alt={item.img} />}
              </li>
            );
          })}
      </ol>
    </section>
  );
};
