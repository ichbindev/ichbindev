import React from "react";
import { Link } from "gatsby";
import moment from "moment";
import { Draggable } from "react-beautiful-dnd";

const BlogLink = ({ path, title, excerpt, date, day, index }) => {
  return (
    <Draggable draggableId={path} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Link to={path}>
            <div
              className="flex flex-row blog-link bg-gray-300 hover:text-blue-900 shadow-xl rounded-lg px-4 py-1 mx-2 my-1"
              style={{
                border: "1px solid black",
              }}
            >
              <div
                className={`${
                  day
                    ? "font-bold text-3xl my-1 pt-3 pr-2 align-bottom"
                    : "hidden"
                }`}
              >
                {day}
              </div>
              <div>
                <h3 className="link-to-post text-xl text-gray-900">{title}</h3>
                <p>{excerpt}</p>
                <p className="text-sm">{moment(date).format("MM/DD/YY")}</p>
              </div>
              {provided.placeholder}
            </div>
          </Link>
        </div>
      )}
    </Draggable>
  );
};

export default BlogLink;
