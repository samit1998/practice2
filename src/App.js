// import React from "react";

const App = ()=>{
    return(
        <div>
        <h1>React Practice</h1>
        <p>How to push in github.</p>
        <p><ul>
            <li>Create a new branch and name it as your username. For example, if my GitHub user is 'sudhanshutiwari</li>
            Commannds
            <li>git add .  //add all files into staging area.</li>
            <li>git commit -m 'message'   //commit the staged changes with a message.</li>
            <li>git status    //check current state of repo, untracked file etc..</li>
            <li>git remote show origin     //show details about your remote repository.</li>
            <li>git pull --rebase upstream master      //pull latest code and rebase it on top of local branch.</li>
            <li>git checkout -b new-branch        //create a new branch called new-branch based off of master (or whatever you want)</li>
            </ul>
            </p>
    </div>
    )
}


export default App