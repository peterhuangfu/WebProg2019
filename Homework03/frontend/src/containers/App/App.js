import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { POSTS_QUERY, USERS_QUERY, CREATE_POST_MUTATION, POSTS_SUBSCRIPTION } from '../../graphql'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Post from '../../components/Post/Post'
import classes from './App.module.css'

let unsubscribe = null
// const useStyle = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     flexBasis: '33.33%',
//     flexShrink: 0,
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
// }))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formTitle: '',
      formBody: '',
      formAuthor: '',
      expanded: false,
    }
  }

  handleChange = panel => (event, isExpanded) => {
    this.setState({ expanded: isExpanded ? panel : false });
  };

  handleFormSubmit = e => {
    e.preventDefault()

    const { formTitle, formBody, formAuthor } = this.state

    if (!formTitle || !formBody || !formAuthor) return

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: formAuthor
      }
    })

    this.setState({
      formTitle: '',
      formBody: '',
      formAuthor: ''
    })
  }

  render() {
    // const kulasses = useStyle()
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost

                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                      <Label for="author" sm={2}>
                        Author
                      </Label>
                      <Col sm={8}>
                        <Query query={USERS_QUERY}>
                          {({ loading, error, data, subscribeToMore }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error :(((</p>

                            const users = data.users.map((user, id) => (
                              <MenuItem value={user.id} key={id}>{user.name}</MenuItem>
                            ))

                            return <Select 
                            value={this.state.formAuthor}
                            onChange={e => this.setState({ formAuthor: e.target.value })}
                            style={{width: '70%'}}>
                            {users}
                            </Select>
                          }}
                        </Query>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <Query query={POSTS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>

                let author_post = {}
                data.posts.map((post, i) => {
                  let auth = post.author.name;
                  if(auth in author_post) {
                    author_post[auth].cnt += 1
                    author_post[auth].posts.push(post)
                  }
                  else {
                    author_post[auth] = {
                      cnt: 1,
                      posts: [post]
                    }
                  }
                })
                
                const posts = Object.keys(author_post).map((name_index, id) => (
                  <ExpansionPanel key={id} expanded={this.state.expanded === id} onChange={this.handleChange(id)}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography style={{ minWidth: '70%' }}><b>{name_index}</b></Typography>
                      <Typography>Posted Number : {author_post[name_index].cnt}</Typography>
                    </ExpansionPanelSummary>
                      {author_post[name_index].posts.map((each_post, i) => {
                        return <ExpansionPanelDetails key={i}><Post data={each_post} /></ExpansionPanelDetails>
                      })}
                  </ExpansionPanel>
                ))
                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: POSTS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev
                      const newPost = subscriptionData.data.post.data

                      return {
                        ...prev,
                        posts: [newPost, ...prev.posts]
                      }
                    }
                  })

                return <div>{posts}</div>
              }}
            </Query>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
