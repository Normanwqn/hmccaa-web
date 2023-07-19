import * as React from "react";
import { Collapsible } from "../../collapsible";
import {
  container,
  titleContainer,
  middleContainer,
} from "../../../css/belief.module.css";

const beliefs = [
  {
    sectionHead: "The Bible",
    sectionBody:
      "We believe the Bible, both the Old and New Testaments, is the only inspired, infallible, and authoritative Word of God. It is the supreme source of truth for Christian faith and living.",
  },
  {
    sectionHead: "God",
    sectionBody:
      "We believe in one God, Creator of all things, infinitely perfect and eternally existing in three persons: Father, Son, and Holy Spirit.",
  },
  {
    sectionHead: "Jesus",
    sectionBody:
      "We believe that Jesus Christ is true (fully) God and true (fully) man, having been conceived of the Holy Spirit and born of the virgin Mary. He died on the cross, the complete and final sacrifice for our sins according to the Scriptures. He arose bodily from the dead, and ascended into heaven where, at God’s right hand, He intercedes for His people and rules as Lord over all.",
  },
  {
    sectionHead: "Holy Spirit",
    sectionBody:
      "We believe that the ministry of the Holy Spirit is to glorify the Lord Jesus Christ, and during this age to convict the world of sin. He also regenerates the believing sinner, indwelling, guiding, instructing, and empowering us for godly living and sacrifice.",
  },
  {
    sectionHead: "Man",
    sectionBody:
      "We believe that the man was created in the image of God, but fell into sin and is therefore destined for eternal death. Only through regeneration by the Holy Spirit can salvation and spiritual life be obtained.",
  },
  {
    sectionHead: "Salvation",
    sectionBody:
      "We believe that the shed blood of Jesus Christ and His resurrection provide the only grounds for justification and salvation for all who believe, and only those who receive Jesus Christ by faith are born of the Holy Spirit and thus become children of God.",
  },
  {
    sectionHead: "Future Events",
    sectionBody:
      "We believe in the visible, personal, glorious, imminent return of Jesus Christ, His bodily resurrection of the dead, the judgment of the just and the unjust, and the fulfillment of Christ’s Kingdom in the new heavens and the new earth. Then shall the eager expectation of creation be fulfilled and the whole earth shall proclaim the glory of God who makes all things new.",
  },
  {
    sectionHead: "Church",
    sectionBody:
      "We believe that the true Church is composed of all such persons who through saving faith in Jesus Christ have been regenerated by the Holy Spirit and are united together in the body of Christ. We believe that Jesus Christ is the Head of the Church, and that every local church has the right under Christ to decide and govern its own affairs.",
  },
  {
    sectionHead: "Ordinances",
    sectionBody:
      "We believe that water baptism and the Lord’s Supper are ordinances to be observed by the Church during the present age. They are, however, not to be regarded as means of salvation.",
  },
];

const Belief = () => (
  <div className={container}>
    <div className={titleContainer}>
      <div className="subheading">Our Beliefs</div>
      <h2>What We Believe</h2>
    </div>
    <div className={middleContainer}>
      {beliefs.map((beliefs, index) => (
        <Collapsible
          key={index}
          sectionHead={beliefs.sectionHead}
          sectionBody={beliefs.sectionBody}
        />
      ))}
    </div>
  </div>
);
export default Belief;
