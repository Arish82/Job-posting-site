import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider/Divider';
import {posting} from '../Controllers/Form'

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: "1em",
      marginTop: "7em",
      marginBottom: "7em",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      divider: {
        marginRight: "auto",
        width: "100%",
        color: "#30967a",
      },
      yearsExp: {
        display: "flex",
        margin: "1em 0px",
      },
      submitbtn:{
        display: "flex",
      }
  }));

  
  export default function JobPost(){
    const classes = useStyles();
    const [title, settitle] = React.useState('');
    const [location, setlocation] = React.useState('');
    const [minYear, setminYear] = React.useState('');
    const [categoryYear, setcategoryYear] = React.useState('');
    const [type, settype] = React.useState('');
    const [graduation, setgraduation] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [tags, settags] = React.useState('');

    const categoryYears=["None","Software Engineering", "Management", "Business Analyst", "Consultant","VLSI"]
    const minYears=["None","0-1", "1-2","2-5","5+"]
    const graduations=["Select","2022","2023","2024","2025"];
    const types=["None", "Internship", "Part Time","Full Time"]
    
    const minhandleChange = (event) => {
        setminYear(event.target.value);
    };
    const cateoryhandleChange = (event) => {
        setcategoryYear(event.target.value);
    };
    const typehandleChange = (event) => {
        settype(event.target.value);
    };
    const graduationhandleChange = (event) => {
        setgraduation(event.target.value);
    };
    const locationhandleChange = (event) => {
        setlocation(event.target.value);
    };
    const tagshandleChange = (event) => {
        settags(event.target.value);
    };
    const descriptionhandleChange = (event) => {
        setdescription(event.target.value);
    };
    const titlehandleChange = (event) => {
        settitle(event.target.value);
    };
    const cancelHandler=()=>{
      window.open('/',"_self");
    }
    const submitform=()=>{

      let obj={
        title,
        location,
        YearsOfExperience: minYear,
        category: categoryYear,
        EmploymentType: type,
        YearOfGraduation: graduation,
        JobDescription: description,
        tags
      }
      posting(obj).then(data=>{
        console.log(data);
      })
    }
    const handlesubmit=()=>{ 
      submitform();
      window.open('/',"_self");
    }
    const handler=()=>{
      submitform();
      window.open('/post-job',"_self");
    }
  return (
    <Container className={classes.root} component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography variant="h4">
          Post Job
        </Typography>
        <Typography className={classes.divider} variant="h4">
          Post Job
        </Typography>
        <Divider className={classes.divider} style={{marginBottom: "1em"}} />

        <form id="myform" className={classes.form} action="./" >
            <TextField
                id="title"
                label="Job Title"
                required
                placeholder="Write a title that appropriately describes this job"
                fullWidth
                margin="normal"
                name="Title"
              value={title}
                onChange={titlehandleChange}
                InputLabelProps={{
                shrink: true,
                }}
                variant="outlined"
                autoFocus
            />
            <TextField
              id="location"
              label="Location"
              required
              placeholder='+Add location'
              fullWidth
              value={location}
                onChange={locationhandleChange}
              margin="normal"
              name="Location"
              InputLabelProps={{
                  shrink: true,
              }}
              variant="outlined"
            />
            <TextField
                id="min-year"
                label="Years of experience"
                required
                select
                fullWidth
                margin="normal"
                name="YearsOfExperience"
                value={description}
                onChange={descriptionhandleChange}
                InputLabelProps={{
                    shrink: true,
                }}
                SelectProps={{
                    native: true,
                }}
                variant="outlined"
                >
                { minYears.map((option,i) =>{
                    return (
                        <>
                            {
                                <option key={i} value={option}>
                                    {option}
                                </option>
                            }
                        </>
                    )
                } 
                )}
            </TextField>
            <TextField
                id="jobDescp"
                label="Job Description"
                placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
                value={minYear}
                onChange={minhandleChange}
                fullWidth
                margin='normal'
                multiline
                name="Description"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />


            <Typography className={classes.divider} style={{marginTop: "1em"}} variant="h4">
                Targeting
            </Typography>
            <Divider className={classes.divider} style={{marginBottom: "1em", marginTop: "0.5em"}} />
            <div className={classes.yearsExp}>
              <TextField
                  id="category"
                  label="Category"
                  required
                  margin="normal"
                  name="category"
                  style={{marginRight: "1em"}}
                  select
                  fullWidth
                  value={categoryYear}
                  onChange={cateoryhandleChange}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  SelectProps={{
                      native: true,
                  }}
                  variant="outlined"
                  >
                  { categoryYears.map((option,i) =>{
                      return (
                          <>
                              {
                                  <option key={i} value={(option==="None")?"":option}>
                                      {option}
                                  </option>
                              }
                          </>
                      )
                  } 
                  )}
              </TextField>
              <TextField
                  id="type"
                  margin="normal"
                  fullWidth
                  select
                  required
                  name="type"
                  label="Employment Type"
                  value={type}
                  onChange={typehandleChange}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  SelectProps={{
                      native: true,
                  }}
                  variant="outlined"
                  >
                  { types.map((option,i) =>{
                      return (
                          <>
                              {
                                  <option key={i} value={(option==="None")?"":option}>
                                      {option}
                                  </option>
                              }
                          </>
                      )
                  } 
                  )}
              </TextField>
            </div>
              <TextField
                  id="graduation"
                  margin="normal"
                  fullWidth
                  select
                  required
                  name="Graduation"
                  label="Graduation Year"
                  value={graduation}
                  onChange={graduationhandleChange}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  SelectProps={{
                      native: true,
                  }}
                  variant="outlined"
                  >
                  { graduations.map((option,i) =>{
                      return (
                          <>
                              {
                                  <option key={i} value={(option==="None")?"":option}>
                                      {option}
                                  </option>
                              }
                          </>
                      )
                  } 
                  )}
              </TextField>
              <TextField
                id="tags"
                label="Tags"
                required
                name="Tags"
                  value={tags}
                  onChange={tagshandleChange}
                placeholder="+Add Tags"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                variant="outlined"
            />
            <div className={classes.submit}>
            <Button onClick={handlesubmit} variant="contained" color="primary" >
              Primary
            </Button>
              <Button
                // type="submit"
                variant="outlined"
                color="primary"
                onClick={handler}
              >
                Post Job and Add Another Job
              </Button>
              <Button
                color="primary"
                onClick={cancelHandler}
              >
                Cancel
              </Button>
            </div>
        </form>
      </div>
    </Container>
  );
}