import MEMBERS_DATA from "../../users";
import Navbar from "../navbar/navbar.component";
import "./card-list.style.css";

const Cardlist = ({ filteredMembers }) => {
  console.log("filteredMembers--->", filteredMembers);

  return (
    <div className="Cardlist">
      <div className="member-container">
        {filteredMembers.map((member) => (
          <div className="card">
            <div key={member.id}>
              <div className="box">
                <div className="image">
                  <img
                    src={member.image}
                    alt={`${member.first_name} ${member.last_name}`}
                  />
                </div>
                <div className="text_container">
                  <p className="text-depart">{member.Department}</p>
                  <h2 className="text-name">{`${member.first_name} ${member.last_name}`}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cardlist;

{
  /* <h1 className="title0">{MEMBERS_DATA[0].title}</h1>
      <div className="member-container">
        {MEMBERS_DATA[0].members.map((member) => (
          <div className="card">
            <div key={member.id}>
              <div className="box">
                <div className="image">
                  <img
                    src={member.image}
                    alt={`${member.first_name} ${member.last_name}`}
                  />
                </div>
                <div className="text_container">
                  <p className="text-depart">{member.Department}</p>
                  <h2 className="text-name">{`${member.first_name} ${member.last_name}`}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="title1">{MEMBERS_DATA[1].title}</h1>
      <div className="member-container">
        {MEMBERS_DATA[1].members.slice(0, 5).map((member) => (
          <div className="card">
            <div key={member.id}>
              <div className="box">
                <div className="image">
                  <img
                    src={member.image}
                    alt={`${member.first_name} ${member.last_name}`}
                  />
                </div>
                <div className="text_container">
                  <p className="text-depart">{member.Department}</p>
                  <h2 className="text-name">{`${member.first_name} ${member.last_name}`}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space"></div>
      <div className="member-container">
        {MEMBERS_DATA[1].members.slice(5, 10).map((member) => (
          <div className="card">
            <div key={member.id}>
              <div className="box">
                <div className="image">
                  <img
                    src={member.image}
                    alt={`${member.first_name} ${member.last_name}`}
                  />
                </div>
                <div className="text_container">
                  <p className="text-depart">{member.Department}</p>
                  <h2 className="text-name">{`${member.first_name} ${member.last_name}`}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space"></div>
      <div className="member-container">
        {MEMBERS_DATA[1].members.slice(10, 15).map((member) => (
          <div className="card">
            <div key={member.id}>
              <div className="box">
                <div className="image">
                  <img
                    src={member.image}
                    alt={`${member.first_name} ${member.last_name}`}
                  />
                </div>
                <div className="text_container">
                  <p className="text-depart">{member.Department}</p>
                  <h2 className="text-name">{`${member.first_name} ${member.last_name}`}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space"></div>
      <div className="member-container-last">
        {MEMBERS_DATA[1].members.slice(15, 20).map((member) => (
          <div className="card">
            <div key={member.id}>
              <div className="box">
                <div className="image">
                  <img
                    src={member.image}
                    alt={`${member.first_name} ${member.last_name}`}
                  />
                </div>
                <div className="text_container">
                  <p className="text-depart">{member.Department}</p>
                  <h2 className="text-name">{`${member.first_name} ${member.last_name}`}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="space"></div> */
}
