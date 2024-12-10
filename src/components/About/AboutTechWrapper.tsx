import React from 'react'
import { Box } from '@mui/material'
import { TechLogos } from '../../util/importAssets'
import { useWindowSize } from '@uidotdev/usehooks'
import { siteMobileBreakPoint } from '../../globals/siteGlobals'

interface TechItemProps {
    href: string
    icon?: React.ReactNode
    imgSrc?: string
    imgWidth?: number
    title?: string
}

interface TechGridProps {
    title: string
    children: React.ReactNode
}

const TechWrapper: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
            }}
        >
            <TechGrid title="Languages">
                <TechGridCol>
                    <TechItem
                        href="https://www.w3.org/TR/html52/"
                        icon={<i className="fab fa-html5" style={{ color: 'orange' }} />}
                        title="Html5"
                    />
                    <TechItem
                        href="https://www.javascript.com/"
                        icon={<i className="fab fa-js-square" style={{ color: 'red' }} />}
                        title="Javascript"
                    />
                    <TechItem href="https://www.mysql.com" imgSrc={TechLogos.mysql} imgWidth={60} />
                    <TechItem
                        href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
                        imgSrc={TechLogos.csharp}
                        imgWidth={28}
                        title=".Net"
                    />
                </TechGridCol>
                <TechGridCol>
                    <TechItem
                        href="https://www.w3.org/Style/CSS/Overview.en.html"
                        icon={<i className="fab fa-css3-alt" style={{ color: 'blue' }} />}
                        title="CSS3"
                    />
                    <TechItem href="http://php.net" icon={<i className="fab fa-php" style={{ color: 'green' }} />} title="PHP" />
                    <TechItem href="https://www.python.org/" imgSrc={TechLogos.python} imgWidth={24} title="Python" />
                    <TechItem href="https://en.wikipedia.org/wiki/Shell_script" imgSrc={TechLogos.shell} imgWidth={28} title="Shell" />
                </TechGridCol>
            </TechGrid>

            <TechGrid title="Frames/Libs">
                <TechGridCol>
                    <TechItem
                        href="https://wordpress.org"
                        icon={<i className="fab fa-wordpress" style={{ color: '#0087be' }} />}
                        title="Wordpress"
                    />
                    <TechItem href="https://jquery.com/" title="jQuery" />
                    <TechItem href="https://angularjs.org/" imgSrc={TechLogos.angular} imgWidth={28} title="AngularJS" />
                    <TechItem href="http://velocityjs.org/" title="Velocity.js" />
                </TechGridCol>
                <TechGridCol>
                    <TechItem href="https://getbootstrap.com/" imgSrc={TechLogos.bootstrap} imgWidth={28} title="Bootstrap" />
                    <TechItem href="http://ricostacruz.com/jquery.transit/" title="Transit" />
                    <TechItem href="https://modernizr.com/" imgSrc={TechLogos.modernizr} imgWidth={140} />
                    <TechItem href="https://vitejs.dev/" title="ViteJS" />
                </TechGridCol>
            </TechGrid>

            <TechGrid title="Dev Ops / Build Tools">
                <TechGridCol>
                    <TechItem href="https://gulpjs.com/" imgSrc={TechLogos.gulpjs} imgWidth={36} title="GulpJS" />
                    <TechItem href="https://www.virtualbox.org/" imgSrc={TechLogos.virtualbox} imgWidth={36} title="VirtualBox" />
                    <TechItem href="https://httpd.apache.org/" imgSrc={TechLogos.feather} imgWidth={26} title="Apache HTTPD" />
                    <TechItem href="https://sass-lang.com/" icon={<i className="fab fa-sass" style={{ color: '#0087be' }} />} />
                </TechGridCol>
                <TechGridCol>
                    <TechItem
                        href="https://nodejs.org/en/"
                        icon={<i className="fab fa-node-js" style={{ color: '#0087be' }} />}
                        title="Node.js"
                    />
                    <TechItem href="https://www.vagrantup.com/" imgSrc={TechLogos.vagrant} imgWidth={110} />
                    <TechItem href="https://git-scm.com/" imgSrc={TechLogos.git} imgWidth={70} />
                    <TechItem href="http://lesscss.org/" icon={<i className="fab fa-less" style={{ color: '#0087be' }} />} />
                </TechGridCol>
            </TechGrid>

            <TechGrid title="Software/Communication">
                <TechGridCol>
                    <TechItem href="https://www.atom.io/" imgSrc={TechLogos.atom} imgWidth={40} title="Atom" />
                    <TechItem href="https://inkscape.org/en/" imgSrc={TechLogos.inkscape} imgWidth={40} title="Inkscape" />
                    <TechItem href="https://www.figma.com/" imgSrc={TechLogos.figma} imgWidth={32} title="Figma" />
                    <TechItem
                        href="https://cpanel.com/"
                        icon={<i className="fab fa-cpanel" style={{ color: '#ff6c2c', fontSize: '2em' }} />}
                    />
                </TechGridCol>
                <TechGridCol>
                    <TechItem href="https://trello.com/" imgSrc={TechLogos.trello} imgWidth={90} />
                    <TechItem href="https://basecamp.com/" imgSrc={TechLogos.basecamp} imgWidth={120} />
                    <TechItem href="https://slack.com/" imgSrc={TechLogos.slack} imgWidth={120} />
                    <TechItem
                        href="https://www.linux.org/"
                        icon={<i className="fab fa-linux" style={{ color: 'black', fontSize: '1.25em' }} />}
                        title="Linux"
                    />
                </TechGridCol>
            </TechGrid>
        </Box>
    )
}

const TechGrid: React.FC<TechGridProps> = ({ title, children }) => {
    const size = useWindowSize()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: size.width && size.width > siteMobileBreakPoint ? '50%' : "100%",
                fontSize: '2em',
                background: '#fcfcfc',
                outline: '6px solid #f5f5f5',
                fontFamily: '"VT323", "monospace"',
            }}
        >
            <Box
                component="h3"
                sx={{
                    textAlign: 'center',
                    fontSize: '.5em',
                    margin: '8px 0px',
                }}
            >
                {title}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

const TechGridCol: React.FC<{ children: React.ReactNode }> = ({ children }) => <Box sx={{ height: '100%', width: '50%' }}>{children}</Box>

const TechItem: React.FC<TechItemProps> = ({ href, icon, imgSrc, imgWidth, title }) => (
    <Box
        component="a"
        href={href}
        target="_blank"
        sx={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2px',
            fontSize: '.90em',
            height: '70px',
            color: 'black',
            margin: '2px',
            '&:hover': {
                color: '#F76784',
                background: '#fafaff',
                border: '1px solid #f0f0f5',
            },
        }}
    >
        {icon || (imgSrc && <img src={imgSrc} style={{ width: imgWidth }} alt={title} />)}
        {title && (
            <Box component="span" sx={{ fontSize: '.65em', padding: '8px' }}>
                {title}
            </Box>
        )}
    </Box>
)

export default TechWrapper
