import React from "react";
import { Card, Container, Image, Icon } from "semantic-ui-react";

const FDashboard = () => {
    const items = [
      {
        header: "What does Start Harvesting mean?",
        description:
          "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Agriculture_in_Volgograd_Oblast_002.JPG",
        //   meta: "ROI: 30%",
      },
      {
        header: "What does Show your History mean?",
        description:
          "Bring to the table win-win survival strategies to ensure proactive domination.",
        image: "https://images.edrawmax.com/images/knowledge/line-graph-1-what-is.jpg",
        //   meta: "ROI: 34%",
      },
    ];

  //   const CardExampleGroupCentered = () => <Card.Group centered items={items} />;

  return (
    <Container>
        <Card.Group centered items={items} />
    </Container>
    
  );
};

export default FDashboard;
