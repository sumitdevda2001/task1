import "./card-list.style.css";

const Cardlist = ({ filteredMembers }) => {
  console.log("filteredMembers--->", filteredMembers);

  return (
    <div className="Cardlist">
      {filteredMembers.length === 0 ? (
        <h2 className="message">No members found.</h2>
      ) : (
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
                <div className="space"></div>
              </div>
            </div>
            
          ))}
        </div>
      )}
      <div className="space"></div>
    </div>
  );
};

export default Cardlist;

