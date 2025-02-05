
const SkillSet = ({ category, skillData }) => {
    return (
        <div className="mb-4">
            <h1 className="text-xl font-bold text-black mb-1">{category}</h1>
            {skillData && (
                <div>
                    {skillData.map((skill) => (
                        <div className="mb-2">
                            <h1 className="text-l text-gray-500 mb-1">{skill.name}</h1>
                            <div className="h-2 rounded-full" style={{ width: `${skill.level}%`, backgroundColor: `var(--lightBlue)`}}></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SkillSet;