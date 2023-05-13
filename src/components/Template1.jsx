import React, { createRef, useEffect, useState } from 'react';
import { GrMail } from 'react-icons/Gr';
import { BsPhoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { AiFillLinkedin, AiFillGithub, AiOutlinePlus, AiTwotoneDelete } from 'react-icons/ai';
import { useScreenshot } from 'use-react-screenshot'
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const userImage = './images/user.png'

export const Template1 = () => {
    const [experience, setExperience] = useState([0]);
    const [education, setEducation] = useState([0]);
    const [projects, setProjects] = useState([0]);
    const [certificates, setCertificates] = useState([0]);
    const [skills, setSkills] = useState([0, 1, 2, 3]);
    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const [buttonVisible, setButtonVisible] = useState(true);
    const getImage = () => takeScreenshot(ref.current)
    console.log(image)

    useEffect(() => {
        $('#photo').change(function () {
            const file = this.files[0];
            console.log(file);
            if (file) {
                let reader = new FileReader();
                reader.onload = function (event) {
                    console.log(event.target.result);
                    $('#imgPreview').attr('src', event.target.result);
                }
                reader.readAsDataURL(file);
            }
        });
    }, [])

    const addExperience = () => {
        setExperience(Array.from(Array(experience.length + 1).keys()))
    }
    const deleteExperience = (ind) => {
        setExperience(experience.filter(item => item !== ind));
    }

    const addEducation = () => {
        setEducation(Array.from(Array(education.length + 1).keys()))
    }
    const deleteEducation = (ind) => {
        setEducation(education.filter(item => item !== ind));
    }

    const addProjects = () => {
        setProjects(Array.from(Array(projects.length + 1).keys()))
    }
    const deleteProjects = (ind) => {
        setProjects(projects.filter(item => item !== ind));
    }

    const addCertificates = () => {
        setCertificates(Array.from(Array(certificates.length + 1).keys()))
    }
    const deleteCertificates = (ind) => {
        setCertificates(certificates.filter(item => item !== ind));
    }

    const addSkills = () => {
        setSkills(Array.from(Array(skills.length + 1).keys()))
    }
    const deleteSkills = (ind) => {
        setSkills(skills.filter(item => item !== ind));
    }
    return (
        <>
            <button className='text-white bg-blue-600 p-2 rounded m-2' onClick={() => {
                setButtonVisible(false)
                setTimeout(() => {
                    const divToCapture = document.getElementById("template1");
                    html2canvas(divToCapture, { scale: 2 }).then(canvas => {
                        const imgData = canvas.toDataURL('image/png');
                        const pdf = new jsPDF('p', 'mm', 'a4');
                        const width = pdf.internal.pageSize.getWidth();
                        const height = (canvas.height * width) / canvas.width;
                        console.log(imgData)
                        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
                        pdf.save('screenshot.pdf');
                    });
                }, 2000)
            }}>Save</button>
            <button className='text-white bg-blue-600 p-2 rounded m-2' onClick={() => {
                setButtonVisible(true)
            }}>Edit</button>
            <div id="template1" className='template1' ref={ref}>
                <div className='bg-white template1-resume'>
                    <div className='top-section'>
                        <div>
                            <>
                                <div>
                                    <h3 contentEditable={true} className='name'>Your Name</h3>
                                    <h4 contentEditable={true} className='title'>Your Title</h4>
                                    <p contentEditable={true} className='description'>Your Description</p>
                                </div>
                            </>
                        </div>
                        <div className='image-container'>
                            <label htmlFor='photo' className="holder">
                                <img id="imgPreview" src={userImage} alt="pic" />
                            </label>
                            <input type="file" name="photograph"
                                id="photo" />
                        </div>
                        <div>
                            <ul className='links'>
                                <li>
                                    <p contentEditable={true} className='mr-2'>user@gmail.com</p>
                                    <GrMail className='text-blue-700 text-sm' />
                                </li>
                                <li>
                                    <p contentEditable={true} className='mr-2'>+91-9876543210</p>
                                    <BsPhoneFill className='text-blue-700 text-sm' />
                                </li>
                                <li>
                                    <p contentEditable={true} className='mr-2'>Mumbai, India</p>
                                    <HiLocationMarker className='text-blue-700 text-sm' />
                                </li>
                                <li>
                                    <p contentEditable={true} className='mr-2'>linkedIn Url</p>
                                    <AiFillLinkedin className='text-blue-700 text-sm' />
                                </li>
                                <li>
                                    <p contentEditable={true} className='mr-2'>Github Url</p>
                                    <AiFillGithub className='text-blue-700 text-sm' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <p contentEditable={true}>I am frontend developer with 1+ Years of Experience</p>
                <div className='bottom-sections'>
                    <div className=''>
                        <div className='experience-container'>
                            <h3 className="sub-section-heading text-left">Experience</h3>
                            {experience?.map((item, i) => (
                                <div key={item} className='text-left'>
                                    <p className='job-title' contentEditable={true}>Job Title</p>
                                    <p className='company-name' contentEditable={true}>Company Name</p>
                                    <div className='flex justify-between'>
                                        <p className='dates' contentEditable={true}>01/01/2021-01/02/2022</p>
                                        <p className='location' contentEditable={true}>Location</p>
                                    </div>
                                    {buttonVisible && <div className='flex justify-end btn-container'>
                                        {(i === experience.length - 1) && (experience.length < 4) && <AiOutlinePlus onClick={addExperience} className='add-button common-btn' />}
                                        {experience.length > 1 && <AiTwotoneDelete onClick={() => deleteExperience(item)} className='delete-button common-btn' />}
                                    </div>}
                                </div>
                            ))}
                        </div>
                        <div className='experience-container'>
                            <h3 className="sub-section-heading text-left">Education</h3>
                            {education?.map((item, i) => (
                                <div key={item} className='text-left'>
                                    <p className='job-title' contentEditable={true}>Course</p>
                                    <p className='company-name' contentEditable={true}>Institute</p>
                                    <div className='flex justify-between'>
                                        <p className='dates' contentEditable={true}>01/01/2021-01/02/2022</p>
                                        <p className='location' contentEditable={true}>93%</p>
                                    </div>
                                    {buttonVisible && <div className='flex justify-end btn-container'>
                                        {(i === education.length - 1) && (education.length < 4) && <AiOutlinePlus onClick={addEducation} className='add-button common-btn' />}
                                        {education.length > 1 && <AiTwotoneDelete onClick={() => deleteEducation(item)} className='delete-button common-btn' />}
                                    </div>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className='experience-container'>
                            <div className='flex justify-between'>
                                <h3 className="sub-section-heading text-left">Skills</h3>
                                {buttonVisible && <AiOutlinePlus onClick={addSkills} className='common-btn' />}
                            </div>
                            <div className='skills-section'>
                                {skills?.map((item, i) => (
                                    <div key={item} className='text-left'>
                                        <p contentEditable={true} style={{ fontSize: "12px", margin: "2px", padding: "2px 4px" }} className='rounded bg-blue-400'>Skill</p>
                                        {skills.length > 1 && buttonVisible && <AiTwotoneDelete onClick={() => deleteSkills(item)} className='delete-button common-btn' />}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='experience-container'>
                            <h3 className="sub-section-heading text-left">Projects</h3>
                            {projects?.map((item, i) => (
                                <div key={item} className='text-left'>
                                    <p className='job-title' contentEditable={true}>Scientific Calculator</p>
                                    <p className='company-name' contentEditable={true}>Tech Stack - React + Redux</p>
                                    <div className='flex justify-between'>
                                        <p className='dates' contentEditable={true}>01/01/2021-01/02/2022</p>
                                        <p className='location' contentEditable={true}>Location</p>
                                    </div>
                                    {buttonVisible && <div className='flex justify-end btn-container'>
                                        {(i === projects.length - 1) && (projects.length < 4) && <AiOutlinePlus onClick={addProjects} className='add-button common-btn' />}
                                        {projects.length > 1 && <AiTwotoneDelete onClick={() => deleteProjects(item)} className='delete-button common-btn' />}
                                    </div>}
                                </div>
                            ))}
                        </div>
                        <div className='experience-container'>
                            <h3 className="sub-section-heading text-left">Certificates</h3>
                            {certificates?.map((item, i) => (
                                <div key={item} className='text-left'>
                                    <p className='job-title' contentEditable={true}>JavaScript</p>
                                    <p className='company-name' contentEditable={true}>Coursera</p>
                                    <div className='flex justify-between'>
                                        <p className='dates' contentEditable={true}>01/01/2021-01/02/2022</p>
                                        {/* <p className='location' contentEditable={true}></p> */}
                                    </div>
                                    {buttonVisible && <div className='flex justify-end btn-container'>
                                        {(i === certificates.length - 1) && (certificates.length < 3) && <AiOutlinePlus onClick={addCertificates} className='add-button common-btn' />}
                                        {certificates.length > 1 && <AiTwotoneDelete onClick={() => deleteCertificates(item)} className='delete-button common-btn' />}
                                    </div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}