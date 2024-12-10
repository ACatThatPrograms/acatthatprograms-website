import React from 'react'
import { Modal, Typography, IconButton, Paper, Divider, Link, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import catLogo from '../assets/cat_logo_inverted.png'

interface ResumeModalProps {
    open: boolean
    handleClose: () => void
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="resume-modal-title" aria-describedby="resume-modal-description">
            <Paper
                sx={{
                    p: 4,
                    maxWidth: '800px',
                    maxHeight: '90vh',
                    mx: 'auto',
                    my: 4,
                    position: 'relative',
                    overflowY: 'auto',
                }}
            >
                <Button href={'./cv.pdf'} rel="noopener noreferrer" target="_blank" sx={{ position: 'absolute', top: 9, right: 50 }}>
                    Download as PDF
                </Button>
                <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
                    <CloseIcon />
                </IconButton>

                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb: '2rem' }}
                >
                    <img src={catLogo} alt="CatLogo" style={{ width: 50, height: 50, marginRight: '1rem' }} />
                    Cat
                </Typography>
                <Typography variant="h5" gutterBottom fontFamily="KanitBold">
                    Full Stack Software Engineer
                </Typography>
                <Typography paragraph color="#555">
                    Senior software engineer with a strong leadership focus seeking new opportunities in the web2/web3 ecosystem. Over ten
                    years of combined IT/DevOps/Security and Software Solutions experience brings a solid addition to any new or growing
                    team.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h5" gutterBottom fontFamily="KanitBold">
                    Recent Experience
                </Typography>

                {/* Experience 1 */}
                <Typography variant="h6" color="#333">
                    Valence.xyz - Engineering Team
                </Typography>
                <Typography variant="subtitle2" color="#555">
                    Lead Engineer ~ March 2023 - Present
                </Typography>
                <ul style={{ marginLeft: 0, listStyleType: 'none', paddingLeft: 0, fontSize: '12px', color: '#656565' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Develop cloud architecture for key IP pertaining to data curation, account management, service pipelines, as well
                        as internal dev ops
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Create and own the front-end development architecture and experience to facilitate an agile product development
                        cycle
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Work closely with product managers to identify needs and create efficient sprint workloads around expected
                        deliveries.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Manage a team of engineers across multiple projects by outlining and scoping deliverables and their respective
                        work
                    </li>
                </ul>

                {/* Experience 2 */}
                <Typography variant="h6" color="#333">
                    MadHive - Research And Development Team
                </Typography>
                <Typography variant="subtitle2" color="#555">
                    Front End Manager / Senior FullStack Engineer ~ Nov 2021 - March 2023
                </Typography>
                <ul style={{ marginLeft: 0, listStyleType: 'none', paddingLeft: 0, fontSize: '12px', color: '#656565' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Develop engineering strategies and implementations for key product features and requirements
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>- Manage the creation and implementation of product design systems</li>
                    <li style={{ marginBottom: '0.5rem' }}>- Create and maintain all onboarding and technical documentation</li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Responsible for research regarding server & client side security and integration for private key storage solutions
                        for wallet applications
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Architect and manage all CI/CD pipelines for continuous application deployment and availability
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Organize and guide UI/UX story creation, wireframing, and prototyping to meet product requirements and design
                        systems
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Provide full front-end product ownership and act as a connecting point between front-end and back-end development
                        needs
                    </li>
                </ul>

                {/* Experience 3 */}
                <Typography variant="h6" color="#333">
                    Springboard - Software Engineering Mentorship Program
                </Typography>
                <Typography variant="subtitle2" color="#555">
                    Software Engineering Mentor ~ May 2021 - Nov 2022
                </Typography>
                <ul style={{ marginLeft: 0, listStyleType: 'none', paddingLeft: 0, fontSize: '12px', color: '#656565' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Engage in one on one sessions weekly with students to provide insight to questions and deep dive on any additional
                        struggles
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Review and grade student submissions and participation for all course material
                    </li>
                </ul>

                {/* Experience 4 */}
                <Typography variant="h6" color="#333">
                    Blockade Labs -- Formerly Blockade Games
                </Typography>
                <Typography variant="subtitle2" color="#555">
                    Full Stack Software Engineer ~ OCT 2018 - MAY 2020 (Lead Software Engineer until Nov 2021)
                </Typography>
                <ul style={{ marginLeft: 0, listStyleType: 'none', paddingLeft: 0, fontSize: '12px', color: '#656565' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Create and develop all user interfaces from the UI team and integrate with back-end APIs / blockchain to
                        facilitate flagship product integration with Ethereum and Matic blockchains.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Create decentralized apps for various games and puzzles that implement NFT asset interactivity
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Create transaction queueing system to better support ongoing oracle communications for Matic bridging
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        - Assist with development of custom tooling to enable multichain gaming assets
                    </li>
                </ul>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h5" gutterBottom color="#333" fontFamily={'KanitBold'}>
                    Skills
                </Typography>
                <Typography variant="body2" color="#555">
                    <b>Languages / Scripts:</b> Javascript / Typescript, Node, Solidity, Python, Go, Bash, Shell, Visual C / C# -- .net
                </Typography>
                <Typography variant="body2" color="#555">
                    <b>Frameworks / Notable Libraries:</b> Nest.js, Express, React.js/ReactNative, Ganache, Truffle, Hardhat, Material UI,
                    Paper, Redux / Thunk, Ethers.js / Web3.js
                </Typography>
                <Typography variant="body2" color="#555">
                    <b>DevOps:</b> AWS, Google Cloud, Redis, Terraform, Heroku, Nginx/Apache, Docker
                </Typography>
                <Typography variant="body2" color="#555">
                    <b>Notable Software Familiarity:</b> Atlassian Stack, VirtualBox/VMware, openVPN, Tailscale, Metamask, Figma, Adobe
                    Suite, Postman
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h5" gutterBottom color="#333" fontFamily={'KanitBold'}>
                    Projects, OSS, Etc
                </Typography>
                <Typography variant="body1" color="#555" sx={{ display: 'flex', flexFlow: 'column' }}>
                    <Link href="https://github.com/acatthatprograms/eth-adapter" target="_blank">
                        eth-adapter (OSS)
                    </Link>
                    <Link href="https://github.com/alicenet/alicenet" target="_blank">
                        alice-net (OSS)
                    </Link>
                    <Link href="https://github.com/BlockadeLabs/blockade-labs" target="_blank">
                        blockade-labs (OSS)
                    </Link>
                    <Link href="https://mooncatexplorer.netlify.app/" target="_blank">
                        moon-cat-explorer (App)
                    </Link>
                    <Link href="https://nonfungible.com/news/game/riddle-of-the-pineapple-arcade" target="_blank">
                        pineapple-arcade (Article)
                    </Link>
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h5" gutterBottom color="#333" fontFamily={'KanitBold'}>
                    Hobbies / Recreation
                </Typography>
                <Typography variant="body2" color="#555">
                    <b>Martial Arts Instructor:</b> Providing leadership and community instruction for 20 years and counting
                </Typography>
                <Typography variant="body2" color="#555">
                    <b>Acoustic Guitarist:</b> Playing music poorly for over ten years
                </Typography>
            </Paper>
        </Modal>
    )
}

export default ResumeModal
