import ExpertiseCard from "./ExpertiseCard"

import ContentResearch from "../../assets/content-research.jpg"
import StoryTelling from "../../assets/story-telling.jpg"
import VideoEditing from "../../assets/video-editing.jpg"
import InfluencersMarketing from "../../assets/influencers-marketing.jpg"
import GraphicDesign from "../../assets/graphic-design.jpg"
import Strategy from "../../assets/strategy.jpg"
import ExpertiseCardBackground from "../../assets/expertise-card-background.jpg"

import "./Expertise.css"

const strategy_content =
    "Developing a winning strategy with Influmind Media involves targeted content creation, strategic influencer partnerships, data-driven campaign management, and optimized ad placements. We enhance brand identity, engage audiences, and drive measurable growth."
const content_research_content =
    "Content research at Influmind Media involves analyzing trends, audience preferences, and competitor strategies to create relevant and engaging content. We ensure your brand stays ahead by consistently delivering valuable and compelling material to your audience."
const story_telling_content =
    "At Influmind Media, storytelling is at the heart of our strategy. We craft compelling narratives that resonate with your audience, build emotional connections, and enhance your brand identity. Our stories captivate, engage, and drive meaningful interactions."
const video_editing_content =
    "At Influmind Media, our video editing services transform raw footage into captivating content. We enhance visuals, perfect audio, and add creative effects to produce videos that engage and inspire your audience, elevating your brand's digital presence."
const influencers_margketing_content =
    "Influmind Media excels in influencer marketing by connecting your brand with the right influencers to amplify your reach. We manage collaborations, create authentic content, and track performance to ensure impactful and results-driven campaigns that resonate with your target audience."
const graphic_design_content =
    "Influmind Media's graphic design with UI/UX expertise creates visually stunning and user-friendly designs. We craft compelling visuals and intuitive interfaces that enhance user experience, ensuring your brand captivates and retains its audience effectively."

const Expertise = () => {
    return (
        <div className="expertise">
            {/* Heading */}
            <h4 className="expertise-heading">Our Expertise</h4>

            {/* Expertise Cards */}
            <div className="expertise-cards">
                <ExpertiseCard
                    key={"strategy"}
                    _background_image={ExpertiseCardBackground}
                    _card_image={Strategy}
                    _card_title={"Strategy"}
                    _card_content={strategy_content}
                />
                <ExpertiseCard
                    key={"content-research"}
                    _background_image={ExpertiseCardBackground}
                    _card_image={ContentResearch}
                    _card_title={"Content Research"}
                    _card_content={content_research_content}
                />
                <ExpertiseCard
                    key={"story-telling"}
                    _background_image={ExpertiseCardBackground}
                    _card_image={StoryTelling}
                    _card_title={"Story Telling"}
                    _card_content={story_telling_content}
                />
                <ExpertiseCard
                    key={"video-editing"}
                    _background_image={ExpertiseCardBackground}
                    _card_image={VideoEditing}
                    _card_title={"Video Editing"}
                    _card_content={video_editing_content}
                />
                <ExpertiseCard
                    key={"influencers-marketing"}
                    _background_image={ExpertiseCardBackground}
                    _card_image={InfluencersMarketing}
                    _card_title={"Influencers Marketing"}
                    _card_content={influencers_margketing_content}
                />
                <ExpertiseCard
                    key={"graphic-design"}
                    _background_image={ExpertiseCardBackground}
                    _card_image={GraphicDesign}
                    _card_title={"Graphic Design"}
                    _card_content={graphic_design_content}
                />
            </div>
        </div>
    )
}

export default Expertise
