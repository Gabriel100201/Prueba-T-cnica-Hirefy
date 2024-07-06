import ViewMoreArrow from '../../assets/ViewMoreArrow.png';
import allReleases from '../../data/AllReleases.json';

export const ReleasesNotes = () => {
  return (
    <>
      <section className="px-[35px] text-alternative mt-[40px] xl:mt-[80px]">
        <div className=' sticky top-12'>

          <h4 className="text-[20px] xl:text-[25px] font-bold">
            All release notes
          </h4>
          <ul className="text-secondary font-bold gap-[17px] flex flex-col mt-[19px]">
            {allReleases.map((item, index) => (
              <li className="truncate text-[14px]" key={index}>
                <a href={item.url} target='_blank'>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-[5px] mt-[19px]">
            <span className="text-[#187DCA] font-bold ">View more</span>
            <img src={ViewMoreArrow} alt="" />
          </button>
        </div>
      </section>
    </>
  );
};
