import rbActive from "../../assets/radiobutton_active.svg";
import rbDef from "../../assets/radiobutton.svg";

export default function Filter(props) {
  function handleClick(e) {
    var rb = e.currentTarget;
    var rbParentNode = rb.parentElement;

    for (var i = 1; i < rbParentNode.children.length; i++) {
      rbParentNode.children[i].classList.remove("filter-toggle-active");
      rbParentNode.children[i]
        .getElementsByTagName("img")[0]
        .setAttribute("src",  rbDef );
    } 

    rb.classList.add("filter-toggle-active");
    rb.getElementsByTagName("img")[0].setAttribute("src",  rbActive );
  }

  return (
    <li className="filter-toggle" onClick={handleClick}>
      <img src={rbDef} alt="rb" />
      <p>{props.text}</p>
    </li>
  );
}
