import NotionImg from "../images/notionImg.jpg";
import AzureImg from "../images/azureImage.png";
import JiraImg from "../images/jiraImage.png";
import SlackImg from "../images/slackImage.jpg";
import SlabImg from "../images/slabImage.png";
import TrelloImg from "../images/trelloImage.png";
import UpbaseImg from "../images/upbaseImage.png";
import ChantyImg from "../images/chantyImage.png";
import FleepImg from "../images/fleepImage.png";

export interface Product {
  id: number;
  name: string;
  image: string;
}

export const productData: Product[] = [
  { id: 1, image: NotionImg, name: "Notion" },
  { id: 2, image: JiraImg, name: "Jira" },
  { id: 3, image: AzureImg, name: "MS Azure" },
  { id: 4, image: SlackImg, name: "Slack" },
  { id: 5, image: SlabImg, name: "Slab" },
  { id: 6, image: TrelloImg, name: "Trello" },
  { id: 7, image: UpbaseImg, name: "Upbase" },
  { id: 8, image: ChantyImg, name: "Chanty" },
  { id: 9, image: FleepImg, name: "Fleep" },
];
