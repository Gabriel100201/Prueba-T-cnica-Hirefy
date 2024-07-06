export const Header = () => {
  return (
    <div className="px-[35px] mt-[20px] xl:mt-[80px] text-alternative flex flex-col xl:flex-row xl:items-center xl:justify-between">
      <h4 className="text-[20px] xl:text-[44px] xl:font-[400] font-bold">
        Release 6.5
      </h4>
      <div className="custom-select-container mt-[10px]">
        <label htmlFor="filter" className="text-[14px] font-semibold mr-[10px]">Sort By:</label>
        <select name="filter" id="filter" className="custom-select w-[182px] h-[39px] rounded-[30px] border-[1px] border-[#DEE7F0] px-[18px]">
          <option value="all">All</option>
          <option value="1">Option-1</option>
          <option value="2">Option-2</option>
        </select>
      </div>
    </div>
  )
}