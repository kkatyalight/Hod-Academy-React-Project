import rbActive from "../../assets/radiobutton_active.svg";
import rb from "../../assets/radiobutton.svg";

export default function Filter(props) {
  function handleClick(e) {
    var rb = e.currentTarget;
    var rbParentNode = rb.parentElement;

    for (var i = 1; i < rbParentNode.children.length; i++) {
      rbParentNode.children[i].classList.remove("filter-toggle-active");
      rbParentNode.children[i]
        .getElementsByTagName("img")[0]
        .setAttribute("src", "src/assets/radiobutton.svg");
    }

    rb.classList.add("filter-toggle-active");
    rb.getElementsByTagName("img")[0].setAttribute(
      "src",
      "src/assets/radiobutton_active.svg"
    );
  }

  return (
    <li className="filter-toggle" onClick={handleClick}>
      <img src={rb} alt="rb" />
      <p>{props.text}</p>
    </li>
  );
}
