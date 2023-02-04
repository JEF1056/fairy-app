import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Props:
// 1. icon
// 2. title
// 3. description
// 4. rightContent
// 5. onClick

function NavRow(props) {
  return (
    <div class="m-4">
      <div class="alert shadow-lg">
        <div>
          <FontAwesomeIcon icon={props.icon} className="pr-3" />
          <div>
            <h3 class="font-bold">{props.title}</h3>
            <div class="text-xs">{props.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavRow;