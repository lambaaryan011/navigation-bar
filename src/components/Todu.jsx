export default function Todu() {
  // Array 'data' containing objects with task and key properties
  let data = [
    {'task': 'Assignment', 'key': 1},
    {'task': 'leetcode', 'key': 2},
    {'task': 'reels', 'key': 3}
  ];

  // Mapping over the 'data' array to create a list of <li> elements
  let list = data.map((kuch) => <li key={kuch.key}>{kuch.task}</li>);

  // The component returns a fragment containing an unordered list (<ul>) with the generated list of <li> elements
  return (
    <>
      <ul>
        {list}
      </ul>
    </>
  );
}
