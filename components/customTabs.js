import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
const CustomTabs = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Box>
      <input
        type="range"
        min="0"
        max="2"
        value={tabIndex}
        onChange={handleSliderChange}
        className="dashboard tabs"
      />

      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>OCR Detection</Tab>
          <Tab>Image Labelling</Tab>
          <Tab>Scene Detection</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Detect Texts using Azure</p>
          </TabPanel>
          <TabPanel>
            <p>Leverage power of Azure Image Labelling</p>
          </TabPanel>
          <TabPanel>
            <p>Got a video? Upload to label it live.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default CustomTabs;
