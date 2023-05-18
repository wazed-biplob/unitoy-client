import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "../../Components/Card/Card";

const ShopByCategory = () => {
  const [toyData, setToyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toyData")
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setToyData(d);
      });
  }, []);
  return (
    <>
      <div className="mt-8 flex justify-center">
        <h1 className="bg-lime-300 pt-2 pb-3 px-4 text-center text-4xl font-bold text-white rounded-xl">
          Shop By Category
        </h1>
      </div>
      <div>
        <Tabs className="text-center mt-4">
          <TabList>
            <Tab>Princess Dolls</Tab>
            <Tab>Adventure Dolls</Tab>
            <Tab>Classic Disney Dolls</Tab>
          </TabList>

          <TabPanel>
            <div className="flex justify-center gap-4">
              {toyData
                .filter((toy) => toy.toySubCategory === "Princess Dolls")
                .map((t, i) => (
                  <Card key={i} t={t} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-center gap-4">
              {toyData
                .filter((toy) => toy.toySubCategory === "Adventure Dolls")
                .map((t, i) => (
                  <Card key={i} t={t} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-center gap-4">
              {toyData
                .filter((toy) => toy.toySubCategory === "Classic Disney Dolls")
                .map((t, i) => (
                  <Card key={i} t={t} />
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ShopByCategory;