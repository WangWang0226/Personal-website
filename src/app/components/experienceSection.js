import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ExperienceSection = ({ experiences }) => {
    return (
        <div>
            {experiences && (
                <div>
                    {experiences.map((exp) => (
                        <div className="mb-6">
                            <h1 className='text-xl font-bold text-black'>{exp.title}</h1>
                            <p class="text-secondary text-sm font-bold mt-2">
                                {exp.time} 
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 ml-2"/> 
                                {exp.company}
                            </p>
                            <p className="text-gray-500 mt-2">{exp.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExperienceSection;