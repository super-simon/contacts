import { FC } from "react";
import { ITag } from "../models/Tag";

interface IProps {
  tags: ITag[];
}

const Tags: FC<IProps> = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <div
          key={tag.id}
          style={{
            margin: "0.2em",
            padding: "0.1em 0.5em",
            borderRadius: "1em",
            backgroundColor: "lightgrey",
            display: "inline-block",
          }}
        >
          {tag.tag}
        </div>
      ))}
    </>
  );
};

export default Tags;
