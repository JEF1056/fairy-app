import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Props:
// 1. icon
// 2. title
// 3. description
// 4. url

function NavRow(props) {
  return (
    <div class="m-4">
      <div class={`alert shadow-lg ${props.color}`}>
        <a href={props.url}>
          <FontAwesomeIcon icon={props.icon} className="pr-3" />
          <div>
            <h3 class="font-bold">{props.title}</h3>
            <div class="text-xs">{props.description}</div>
          </div>
        </a>
        {props.buttonText ? (
          <div class="flex-none">
            <button class="btn btn-sm" onClick={props.callback}>{props.buttonText}</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default NavRow;
