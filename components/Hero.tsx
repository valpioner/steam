const HeroComponent = () => {
  return (
    <div className='w-full'>
      <div
        className='h-[450px] bg-cover bg-no-repeat'
        style={{
          backgroundImage:
            "url('https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/frontpage/d2fc1839e6d076b4109721fd/page_bg_english.jpg?t=1740504633'), linear-gradient(to right, rgb(5,5,5) 50%, rgb(5,5,5) 50%)",
        }}
      ></div>
    </div>
  );
};

export default HeroComponent;
