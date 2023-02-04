import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//title
//description
function AlertComponent(props) {
  return (
    <div class="alert shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-info flex-shrink-0 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 class="font-bold">{props.title}</h3>
          <div class="text-xs">{props.description}</div>
        </div>
      </div>
      <div class="flex-none">
        <button class="btn btn-sm">See</button>
      </div>
    </div>
  );
}

export default AlertComponent;

// function NavRow(props) {
//     return (
//       <div class="m-4">
//         <div class="alert shadow-lg">
//           <a href={props.url}>
//             <FontAwesomeIcon icon={props.icon} className="pr-3" />
//             <div>
//               <h3 class="font-bold">{props.title}</h3>
//               <div class="text-xs">{props.description}</div>
//             </div>
//           </a>
//         </div>
//       </div>
//     );
//   }
