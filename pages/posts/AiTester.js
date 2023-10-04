
import Layout from '../../components/templates/layout'
import { OpenAI } from 'openai';
import React, { useState, useCallback } from "react";
require('dotenv').config()
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export default class AiTester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onCanvasClick: function() {return null},
            genre: '',
            characters: '',
            showCharacterButton: false,
            showCharacters: false
        };
        this.setGenre = this.setGenre.bind(this);

    }

    setGenre(genre) {
        this.setState({genre: genre})
        this.setState({characters: ''})
        this.setState({showCharacterButton: true})
    }

    async generateCharacters() {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{role: 'user', content: 'Give me 10 names for characters in a' + this.state.genre + ' movie'}],
            model: 'gpt-3.5-turbo',
        });
        this.setState({characters: chatCompletion.choices.pop().message.content})
        this.setState({showCharacters: true})
    }

    getStyle(genre) {
        return "border-solid border-2 border-sky-500 rounded mx-20 px-10 " + (this.state.genre === genre ?  "bg-amber-200" :"bg-slate-200")
    }

    render() {
        return (

            <Layout header={"Let's Make a Movie"} title={"AI Movie"} showBar={true}>
                <div className="justify-center content-center w-400 my-auto" >
                    <h1 className="text-xl font-extrabold text-center">
                        Let's make a Script
                    </h1>
                    <br/>

                    <h2 className="font-extrabold text-center">
                        Let's start with the Genre.
                    </h2>
                    <br/>
                    <div className="max-w-2/3 mx-auto flex justify-center pb-20">
                        <button className={this.getStyle("Western")} onClick={async () => {await this.setGenre("Western");} }>
                            Western
                        </button>
                        <button className={this.getStyle("Gen Z Teenage Drama")} onClick={async () => {await this.setGenre("Gen Z Teenage Drama");} }>
                            Gen Z Teenage Drama
                        </button>
                        <button className={this.getStyle("90s Sports Comedy")} onClick={async () => {await this.setGenre("90s Sports Comedy");} }>
                            90s Sports Comedy
                        </button>
                        <button className={this.getStyle("Noir Detective")} onClick={async () => {await this.setGenre("Noir Detective");} }>
                            Noir Detective
                        </button>
                    </div>
                    {this.state.showCharacterButton ? (
                        <div>
                            <h2 className="font-extrabold text-center">
                                Next, let's get some characters.
                            </h2>
                            <br/>
                            <div className="max-w-2/3 mx-auto flex justify-center pb-20">
                                <button className="border-solid border-2 border-sky-500 rounded bg-slate-200" onClick={async () => {await this.generateCharacters();} }>
                                    Generate characters
                                </button>
                            </div>
                        </div>
                    ) : (<div/>)
                    }
                    {this.state.showCharacters ? (
                    <div className="border-solid border-2 border-sky-500 max-w-2/3 mx-auto h-400 my-16">
                    {this.state.characters}
                    </div>) : (<div/>)}
                </div>
            </Layout>
        )
    }
}
