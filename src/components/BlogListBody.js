import React, { useState } from "react";
import BlogLink from "./BlogLink";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorderList = (oldList, originalIndex, destinationIndex) => {
  const reorderedList = Array.from(oldList);
  // take the element out of the list
  const [target] = reorderedList.splice(originalIndex, 1);
  // and put it at its new position
  reorderedList.splice(destinationIndex, 0, target);
  // return reorderedList;
};

// TODO: set up jest
const testReorder = () => {
  const list = [1, 2, 3, 4, 5];
  // simulate moving item 1 to index 1
  const newList = reorderList(list, 0, 1);
  // expect 2, 1, 3, 4, 5
  console.log(newList);
};

const BlogListBody = ({ data }) => {
  const [edges, setEdges] = useState(data.allMarkdownRemark.edges);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const blogPosts = reorderList(
      edges,
      result.source.index,
      result.destination.index
    );

    setEdges(edges);
  };
  testReorder();
  return (
    // context
    <DragDropContext
      // onDragStart={} onDragUpdate={}
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId={`blogListBody`}>
        {(
          provided // Droppable requires children to be a function
        ) => (
          <div className="blog-link-container" style={{ margin: "20px" }}>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                fontFamily: "avenir",
              }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {edges.map((edge, index) => {
                const { frontmatter } = edge.node;
                return (
                  <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
                    <BlogLink
                      path={frontmatter.path}
                      title={frontmatter.title}
                      date={frontmatter.date}
                      excerpt={frontmatter.excerpt}
                      day={frontmatter.day}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BlogListBody;
