import React, { useState } from 'react'
import {
    Box,
    TextField,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Popover,
    IconButton,
    FormControl,
    InputLabel,
    Alert,
    FormHelperText,
} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import InfoIcon from '@mui/icons-material/Info'
import axios from 'axios'

const ContactForm: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [popoverContent, setPopoverContent] = useState('')
    const [awaitingResponse, setAwaitingResponse] = useState(false)

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [inquiryType, setInquiryType] = useState('')
    const [message, setMessage] = useState('')
    const [messageLength, setMessageLength] = useState(0)

    const [fullNameError, setFullNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [inquiryTypeError, setInquiryTypeError] = useState('')
    const [messageError, setMessageError] = useState('')
    const [genericError, setGenericError] = useState('')
    const [contactSuccess, setContactSuccess] = useState(false)

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, content: string) => {
        const targetElement = event.currentTarget
        setAnchorEl(targetElement ? targetElement : event.currentTarget)
        setPopoverContent(content)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
        setMessageLength(event.target.value.length)
    }

    const validateForm = () => {
        let isValid = true
        setFullNameError('')
        setEmailError('')
        setInquiryTypeError('')
        setMessageError('')
        setGenericError('')

        if (!fullName.trim()) {
            setFullNameError('Full Name or Business Entity is required.')
            isValid = false
        }

        if (!email.trim()) {
            setEmailError('Contact Email is required.')
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email format.')
            isValid = false
        }

        if (!inquiryType.trim()) {
            setInquiryTypeError('Inquiry Type is required.')
            isValid = false
        }

        if (!message.trim()) {
            setMessageError('Message is required.')
            isValid = false
        }

        return isValid
    }

    const contactSubmit = async () => {
        // if (contactSuccess) {
        //     return setGenericError("You've already submitted a message!")
        // }
        if (validateForm()) {
            setAwaitingResponse(true)
            try {
                const res = await axios.post(import.meta.env.VITE_ROOT_API_URL + '/contact', {
                    full_name: fullName,
                    contact_email: email,
                    inquiry_type: inquiryType,
                    message: message,
                })
                if (res.status === 201) {
                    setContactSuccess(true)
                }
            } catch (ex) {
                console.error(ex)
                setGenericError('An error occurred while submitting the form. Please try again.')
            }
            setAwaitingResponse(false)
        }
    }

    return (
        <Box
            sx={{
                p: 2,
                maxWidth: '600px',
                mx: 'auto',
                textAlign: 'left',
                minHeight: '500px', // Adjust this value as needed to prevent jumping
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Box>
                {/* Full Name or Business Entity */}
                <Box sx={{ mb: 0 }}>
                    <InputLabel>
                        Full Name or Business Entity
                        <IconButton
                            onClick={(e) => handlePopoverOpen(e, 'Your full name or legal business entity name')}
                            sx={{ position: 'relative', left: '2px', top: '-2px' }}
                            size="small"
                        >
                            <InfoIcon fontSize="small" />
                        </IconButton>
                    </InputLabel>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Enter your full name or business entity"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        error={!!fullNameError}
                    />
                    <FormHelperText error={!!fullNameError} sx={{ minHeight: '24px', marginLeft: 0 }}>
                        {fullNameError || ' '}
                    </FormHelperText>
                </Box>

                {/* Contact Email */}
                <Box sx={{ mb: 0 }}>
                    <InputLabel>
                        Contact Email
                        <IconButton
                            onClick={(e) => handlePopoverOpen(e, 'The email you would like replies to')}
                            sx={{ position: 'relative', left: '2px', top: '-2px' }}
                            size="small"
                        >
                            <InfoIcon fontSize="small" />
                        </IconButton>
                    </InputLabel>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Enter your contact email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!emailError}
                    />
                    <FormHelperText error={!!emailError} sx={{ minHeight: '24px', marginLeft: 0 }}>
                        {emailError || ' '}
                    </FormHelperText>
                </Box>

                {/* Inquiry Type */}
                <Box sx={{ mb: 0 }}>
                    <InputLabel>
                        Inquiry Type
                        <IconButton
                            onClick={(e) => handlePopoverOpen(e, 'Small: 1-3 months, Medium: 4-8 months, Large: 8+ months')}
                            sx={{ position: 'relative', left: '2px', top: '-2px' }}
                            size="small"
                        >
                            <InfoIcon fontSize="small" />
                        </IconButton>
                    </InputLabel>
                    <FormControl component="fieldset" error={!!inquiryTypeError}>
                        <RadioGroup row value={inquiryType} onChange={(e) => setInquiryType(e.target.value)}>
                            <FormControlLabel value="small" control={<Radio />} label="Small Project" />
                            <FormControlLabel value="medium" control={<Radio />} label="Medium Project" />
                            <FormControlLabel value="large" control={<Radio />} label="Large Project" />
                            <FormControlLabel value="partTime" control={<Radio />} label="Part Time (W2)" />
                            <FormControlLabel value="fullTime" control={<Radio />} label="Full Time (W2)" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        <FormHelperText error={!!inquiryTypeError} sx={{ minHeight: '24px', marginLeft: 0 }}>
                            {inquiryTypeError || ' '}
                        </FormHelperText>
                    </FormControl>
                </Box>

                {/* Message */}
                <Box sx={{ mb: 0, position: 'relative' }}>
                    <InputLabel>
                        Message
                        <IconButton
                            onClick={(e) => handlePopoverOpen(e, 'This is what Cat will see in his messages')}
                            sx={{ position: 'relative', left: '2px', top: '-2px' }}
                            size="small"
                        >
                            <InfoIcon fontSize="small" />
                        </IconButton>
                    </InputLabel>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        placeholder="Enter your message"
                        inputProps={{ maxLength: 4000 }}
                        value={message}
                        onChange={handleMessageChange}
                        error={!!messageError}
                    />
                    <FormHelperText error={!!messageError} sx={{ minHeight: '24px', marginLeft: 0 }}>
                        {messageError || ' '}
                    </FormHelperText>{' '}
                    <Typography variant="caption" sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                        {messageLength}/4000
                    </Typography>
                </Box>
            </Box>

            {/* Submit Button */}
            <Box sx={{ mt: 2 }}>
                <LoadingButton loading={awaitingResponse} variant="contained" color="primary" fullWidth onClick={contactSubmit}>
                    Submit
                </LoadingButton>

                {/* Generic Error Message */}
                {(genericError || contactSuccess) && (
                    <>
                        <Alert severity={genericError ? 'error' : 'success'} sx={{ mt: 2 }}>
                            {genericError || 'Your message has been sent!'}
                        </Alert>
                    </>
                )}
            </Box>

            {/* Popover */}
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    '& .MuiPopover-paper': {
                        mt: '-6px',
                        ml: '-0',
                        boxShadow: 'none',
                    },
                }}
            >
                <Typography sx={{ p: 1, fontSize: '12px', color: '#555' }}>{popoverContent}</Typography>
            </Popover>
        </Box>
    )
}

export default ContactForm
