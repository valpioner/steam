import { FC } from 'react';

type ChildProps = {
  element: JSX.Element | null;
  Component: FC<{ customClasses?: string }>;
  renderChildFn: (customClasses: string) => JSX.Element | null;
};

const Child = ({ element, Component, renderChildFn }: ChildProps) => {
  return (
    <div className="border p-[10px] flex flex-col gap-[10px]">
      Child component content
      <br />
      {/* If I pass element like `element` - I can't add styles directly, wrapper is the only solution, 
      I also have to check for element itself to avoid empty wrapper */}
      {element && <div className="bg-yellow-800">{element}</div>}
      {/* If I pass element like `Component` - works fine if I pass classes as a props */}
      <Component customClasses="bg-green-900" />
      {/* If I pass element like `renderFn` - works fine if I pass classes as a props to the fn,
      for me personally this is simplest looking solution, because passing as Component adds extra contextual complexity */}
      {renderChildFn('bg-purple-900')}
    </div>
  );
};

const TestPage = () => {
  const elementVisible = true;

  // element that is controlled by a parent
  const element = elementVisible ? (
    <div className="border">Content passed as an `element` from a parent</div>
  ) : null;

  // component that is controlled by a parent
  const Component: FC<{ customClasses?: string }> = ({ customClasses }) =>
    elementVisible && (
      <div className={`border ${customClasses}`}>
        Content passed as a `Component` from a parent
      </div>
    );

  // this render fn is controlled by a parent
  const renderChildFn = (customClasses: string) =>
    elementVisible ? (
      <div className={`border ${customClasses}`}>
        Content passed as a `Component` from a parent
      </div>
    ) : null;

  return (
    <div className="w-[940px] mx-auto py-[50px]">
      <Child
        element={element}
        Component={Component}
        renderChildFn={renderChildFn}
      />
    </div>
  );
};

export default TestPage;

// Copilot explains:

// In React, the best way to pass content to a child component depends on the specific use case and requirements.
// Each method you have used has its own advantages and trade-offs:

// Passing as an Element (element):
// Pros: Simple and straightforward. Easy to understand and use.
// Cons: Limited flexibility. You cannot easily modify the element's props or styles from within the child component.

// Passing as a Component (Component):
// Pros: More flexible than passing an element. You can pass props to the component, allowing for more dynamic content.
// Cons: Adds some complexity, as you need to handle the component's props and lifecycle.

// Passing as a Render Function (renderChildFn):
// Pros: Highly flexible. You can pass any props or context to the function, and it can return different elements based on the input.
// Cons: Slightly more complex to understand and implement. Can lead to less readable code if overused.

// Most Popular Method
// The most popular method in the React community is passing content as a Component.
// This approach strikes a good balance between flexibility and simplicity.
// It allows you to pass props and manage the component's lifecycle while keeping
// the code relatively easy to understand.

// Recommendation
// For most use cases, passing content as a Component is the best approach.
// It provides the flexibility needed for dynamic content while maintaining readability and simplicity.
// However, if you need maximum flexibility and are comfortable with the added complexity,
// passing content as a render function can be a powerful tool.
