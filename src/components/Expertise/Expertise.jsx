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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sodales facilisis. Curabitur in egestas justo. Fusce sed mi leo."
const content_research_content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sodales facilisis. Curabitur in egestas justo. Fusce sed mi leo."
const story_telling_content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sodales facilisis. Curabitur in egestas justo. Fusce sed mi leo."
const video_editing_content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sodales facilisis. Curabitur in egestas justo. Fusce sed mi leo."
const influencers_margketing_content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sodales facilisis. Curabitur in egestas justo. Fusce sed mi leo."
const graphic_design_content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sodales facilisis. Curabitur in egestas justo. Fusce sed mi leo."

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
