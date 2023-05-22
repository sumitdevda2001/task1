import "./card.styles.css";
import MEMBERS_DATA from "../../users";
// Assuming you have an HTML element with the id "membersContainer" where you want to display the members
const membersContainer = document.getElementById("membersContainer");

// Iterate over the data and generate the necessary HTML elements
MEMBERS_DATA.forEach((team) => {
  const teamTitle = document.createElement("h2");
  teamTitle.textContent = team.title;
  membersContainer.appendChild(teamTitle);

  team.members.forEach((member) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("member");

    const memberName = document.createElement("h3");
    memberName.textContent = `${member.first_name} ${member.last_name}`;
    memberDiv.appendChild(memberName);

    const memberDepartment = document.createElement("p");
    memberDepartment.textContent = member.Department;
    memberDiv.appendChild(memberDepartment);

    const memberImage = document.createElement("img");
    memberImage.src = member.image;
    memberDiv.appendChild(memberImage);

    membersContainer.appendChild(memberDiv);
  });
});
const Card = ({ team_member }) => {
  const { id, name, designation } = team_member;

  return (
    <div className="card-container">
    
      <h2>{name}</h2>
      <p>{designation}</p>
    </div>
  );
};

export default Card;
