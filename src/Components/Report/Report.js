import React from 'react';
import './Report.css';
import SQLPIC from './SQL_Diagram.jpg';
import KNOWNPIC from './KnownVulnerabilities_Diagram.png';
import SQL_EX from './SQL_Example.jpg';
import SCAN_EX from './Scanning_Ex.png';
import SCAN_EX2 from './Scanning_Ex2.png';
class Report extends React.Component {


    render() {

        return (

            <div className="report">

                <div className="report-header">
                    <h1>Report</h1>

                    <h3>Section 1: Exploit Summary</h3>
                </div>

                <div className="report-list" >

                    <div className="box">

                        <p>There 4 different specific exploits that will be covered in this report. The exploits will be demonstrated on a web application. The vulnerabilities will be given a brief description in the following segment:</p>

                        <u><strong>Brief Description</strong></u>
                        <br />
                        <br />
                        <strong>Exploit 1: SQL injection</strong>

                        <p>An injection attack specifically a SQL injection attack consists of malicious code that will expose a vulnerability capable of accessing the database layer of an application. SQL injection allows an attacker to spoof identity, allow operations on data from retrieving to changing it. Also be able to gain unauthorized access to the system being targeted. </p>

                        <strong>Exploit 2: Broken Access Control/Cross Site Request Forgery (CSRF)</strong>

                        <p>Access control in a web application ensures that each user type can access resources and actions within their intended permissions. A broken access control allows for horizontal, vertical or context-based privilege escalation that an attacker can exploit, giving them unauthorized ability to gather, modify or destroy data. </p>

                        <p>A flaw in access control may allow an attacker to execute a <strong>Cross Site Request Forgery</strong> (CSRF). This attack targets other users by forcing them to perform action(s) unintentionally, and depending on the severity, grant the attacker privileges or control over the user’s account.</p>

                        <strong>Exploit 3: Components with Known Vulnerabilities</strong>

                        <p>When designing a program or website, programmers may use components in their site with known vulnerabilities. The programmer may or may not be aware of it, depending or not if they have done some research on the component they are using or if they were warned that the component has vulnerabilities. </p>
                    </div>

                </div >

                <br />

                <div className="box">

                    <u><strong>Operating System</strong></u>

                    <p>All operating systems need some form of access controls for managing files or directories with different permissions types (read-only, read-and-write, execute, etc). Distributed OS, Batch OS, Time-Sharing OS, Hard and Soft Real-Time systems, and Network systems provide different and unique threats when it comes to failures in access control. Our topic of discussion focuses on web-application vulnerabilities, thus narrowing our focus towards systems that allow for web access is most relevant.</p>

                    <p>This vulnerability may affect many different types of OS’s, depending on if it is a web application or if it is a program. Web applications can affect many OS’s because almost all OS’s support a web browser, while only some applications can run on certain OS.</p>

                </div>

                <br />

                <div className="box">
                    <u><strong>Protocals/Services/Applications</strong></u>

                    <div className="report-list">
                        <ul>
                            <li>
                                <strong>Exploit 1: SQL Injection</strong>

                                <p>Generally web applications deal with a database access protocol. These are designed so that the detailed contents of the data store can be easily integrated into a particular framework with relative simplicity.  A single database access protocol is also preferred so that multiple sources can gain access to data that is needed. In the case of the web app we are using the specific protocol being used is Structured Query Language(SQL) even more specific SQLite and Sequelize which is promise-based Node Object Relational Mapper.</p>

                            </li>

                            <li>
                                <strong>Exploit 2: Broken Access Control/Cross Site Request Forgery (CSRF)</strong>

                                <p>Even a simple application on the internet needs some form of access control protocol. At the very basic, a static bare-bone website still needs to restrict admin permissions from the rest of the users. These problems escalate as applications increase in complexities in user groups with different privileges and level of access. </p>

                                <p>Most CSRF attacks use some form of social engineering and rely of the user clicking a faulty link, website, or email while authenticated into a site that the attacker wants.[4] CSRF attacks make use of cookie sessions, therefore users can initiate or be victims of attacks on all major network operating systems like Windows, MacOS, ChromeOS and Linux, and from any common sandbox browser like Chrome, Firefox, Opera, etc.[4] This is because although the cookies associated with an application is hidden to the attacker, the exploit only involves the end user executing a request unintentionally.[3][4]</p>

                                <p>In a general sense, a HTTP request does not care about the source of the request itself. This means that a malicious source (a third-party) can send a request, and it will be the same from the browser’s perspective.[4][5]</p>

                                <ul>
                                    <li>
                                        <strong>Synchronizer Token Pattern</strong>

                                        <p>A proper “patch” that is widely accepted is using Synchronizer Token Pattern, which includes a random token as a parameter that validates all HTTP requests before execution.[4] This token can be encrypted or hash-based that the server generates for each request or session for the client[4]. Because only the sever and the client have the knowledge of the token, CSRF attacks that send request will be invalidated.[4]</p>

                                    </li>

                                    <li>
                                        <strong>SameSite Cookie Atribute</strong>

                                        <p>To mitigate cross-site requests, cookies sent with cross-site requests can have an attribute called SameSite marked <strong>Lax</strong> (no POST requests, and request must be top-level navigation), <strong>Strict</strong> (cookie will not be sent at all), or <strong>None</strong> (clear communication with no restriction) [4]. This attribute is meant to be used in addition to tokens and not as a substitute. On February 2020, Google updated the Chrome browser with third-party access to “Lax” by default. [4] </p>
                                    </li>


                                </ul>
                            </li>

                            <li>
                                <strong>Exploit 3: Components with Known Vulnerabilities</strong>

                                <p>Depending on what component you use it may affect different protocols, services, or application. This is all dependent on what the component has access to and what the vulnerability gives access to. </p>
                            </li>

                        </ul>
                    </div>
                </div>

                <br />

                <div className="box">
                    <u><strong>Varients</strong></u>
                    <br />
                    <br />

                    <strong>Exploit 1: SQL injection</strong>

                    <p>There are many variants to the SQL injection but I will explain two of the variants that are most common.</p>

                    <p>In-band SQL Injection is the most common and easy-to-exploit of SQL Injection attacks. In-band SQL Injection occurs when an attacker is able to use the same communication channel to both launch the attack and gather results. This is the category of the exploit demonstrated will fall under.</p>

                    <p>In an inferential SQLi attack, no data is actually transferred via the web application and the attacker would not be able to see the result of an attack in-band. Instead, an attacker is able to reconstruct the database structure by sending payloads, observing the web application’s response and the resulting behavior of the database server.</p>

                    <strong>Exploit 2: Broken Access Control/Cross Site Request Forgery (CSRF)</strong>

                    <p>To better understand the variants of CSRF attacks, we need to look at privilege escalation. </p>

                    <p>One of the fundamentals to access control threats is privilege escalation, where an attacker gains privileges it normally would otherwise be restricted from accessing.</p>

                    <div className="report-list">

                        <ul>
                            <li>
                                <strong>Vertical Access</strong>
                                <p>In vertical privilege escalation attack, the attacker grant themselves privileges reserved for users of higher level “by climbing up the vertical ladder”.</p>

                                <ul>
                                    <li>
                                        Example: Gaining admin permission to web-server.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <strong>Horizontal Access</strong>

                                <p>an exploit in horizontal access allows the attacker to access resources of other users within the same level of capabilities.</p>

                                <ul>
                                    <li>
                                        Example: Changing the password of another user’s account.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <strong>Context-dependent access </strong>

                                <p>some actions are context dependent on parameters such as location, time, sequence of events, etc. </p>

                                <ul>
                                    <li>
                                        Example: User should not be able to modify their online shopping cart after order is placed.
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <p>CSRF attacks are classified mostly as horizontal privilege escalation where the attacker exploits the privileges of the user to execute an attack. However, every unique CSRF attack can be a combination of the privilege escalation types. In the same fashion, a CSRF attack that targets users with administrative access would be an attack involving vertical privilege escalation. </p>
                    </div>

                    <strong>Exploit 3: Components with Known Vulnerabilities</strong>
                    <p>The variants on this exploit depend on what type of component is being used. Some components need access to the network which could act as a network exploit, while others may just steal data.</p>
                </div>


                <div className="report-header">
                    <h3>Section 2: The Attack</h3>
                </div>

                <div className="box">
                    <u><strong>Description and Network Diagram</strong></u>
                    <br />
                    <br />
                    <strong>Exploit 1: SQL Injection</strong>
                    <br />
                    <img src={SQLPIC} />

                    <p>In this diagram it shows the different aspects of the system. It includes front end frameworks where the attacker use entry points to access database layer of the system. There is also middleware that acts as a communicator between the front end and back end also allowing entry points for an attacker.</p>

                    <br />
                    <strong>Exploit 3: Components with Known Vulnerabilities</strong>
                    <br />
                    <img src={KNOWNPIC} />

                    <p>In this diagram the attacker is finds a website they may have a vulnerability. Once a vulnerability is found he uses it to request a specific file and returns it to him. The attacker should not be able to access any file they want; the website and server should request his credentials and determine if he should have access to it. The vulnerable component let him by pass the authentication and authorization of the website and the attacker was able to freely download the file.</p>
                </div>

                <br />

                <div className="box">
                    <u><strong>Protocal/Service Description</strong></u>

                    <p>For this exploit, we will be using Burp Suite as our tool for generating CSRF PoC (This feature is not available for the Community version). Burp Suite is a platform that intercepts and keeps a history of HTTP requests made by your browser, among other things. This feature will help us identify the source, the client, and the type of request being sent. </p>

                    <strong>How the exploit works/ Description and diagram of the attack </strong>

                    <strong>Exploit 1: SQL Injection</strong>

                    <img src={SQL_EX} />

                    <p>This SQL code is designed to pull up the records of the specified username from its table of users. However, if the "userName" variable is crafted in a specific way by a malicious user, the SQL statement may do more than the code author intended. For example, setting the "userName" variable as:  ' OR '1'='1' -- renders one of the following SQL statements by the parent language: SELECT * FROM users WHERE name = '' OR '1'='1' -- '; If this code were to be used in an authentication procedure then this example could be used to force the selection of every data field (*) from all users rather than from one specific user name as the coder intended, because the evaluation of '1'='1' is always true.</p>

                    <strong>Exploit 2: Broken Access Control/Cross Site Request Forgery (CSRF)</strong>

                    <p>Reconnaissance</p>

                    <p>To use Burp Suite with my browser of choice (Firefox), I ran the application, and added proxy listeners and certificate required. This was to allow it to intercept all HTTP requests from the browser. </p>

                    <p>Scanning</p>

                    <p>Next, as the platform runs in the background, a user from the same network visits the Juice Shop website and submits their email and password in the login form. All requests is logged in Burp Suite and accessed through the HTTP history tab.</p>

                    <img src={SCAN_EX} />

                    <p>The email and password field are visible here as its being sent as a POST request to the server in form of a JSON. This is bad practice and no real world website today would do this. </p>

                    <p>The next step in the process would be to use the intercepted to generate a CSRF PoC, but this feature is only available for the paid version which we did not have access to.</p>

                    <img src={SCAN_EX2} />


                    <strong>Exploit 3: Components with Known Vulnerabilities</strong>

                    <p>The exploit works by taking advantage of vulnerable software that allows the attacker to gain access to information they should not be able to or even manipulate data. Outdated software can be the cause of this since exploits could have been found that have been patched in newer updates.</p>

                    <p>The attacker can identify libraries or a framework that has a vulnerability. IF the component is deep inside the application then it becomes harder for the attacker to identify. To insure you find components it is easier to keep them at the top layer of the App. If the attacker gains access to a component it may give him access to more attacks such as SQL injections.</p>
                </div>

                <br />

                <div className="box">

                    <u><strong>Signature of the attack</strong></u>
                    <br />
                    <br />
                    <strong>Exploit 3: Components with Known Vulnerabilities</strong>

                    <p>Depending on what the attack was it may leave a signature. For example, of the signature turned out to be a SQL Injection, you may be able to detect data being stolen at a certain time from no users or data being modified that should not be modified.</p>

                    <p>It really depends on what type of vulnerability your application has to find out what has happened. This is what makes vulnerabilities very hard to detect because you may think it is linked to something where it is a component in your application.</p>

                </div>

                <br />

                <div className="box">
                    <u><strong>How to protect against it</strong></u>
                    <br />
                    <br />
                    <strong>Explot 1: SQL Injection</strong>

                    <p>To prevent this attack escaping characters that have special meaning in SQL. Simply replacing single quotes with two single quotes will stop this attack from executing.</p>

                    <strong>Exploit 2: Broken Access Control/Cross Site Request Forgery (CSRF)</strong>

                    <p>To fix this vulnerability, email and password credentials must be secured before being sent to the server. Sending an unencrypted JSON object containing such sensitive information would allow for easy snooping. This is an easy issue to solve, one of which is by applying a hashing algorithm first and collected the hashed data instead.</p>

                    <p>The issue we were really trying to tackle was cross site request forgery, which if the snooper were to send a request taking advantage of the user’s authentication, it would not succeed  through implementation adding token parameters and third party resource restrictions. Most reputable web application have these majors in place and the average user would not encounter this issue (for the most part).</p>

                    <p>Principle of Least Privilege</p>

                    <p>The vendor would fix this issue by using principle of least privilege, which means the starting implementation should restrict all functionalities, and then add permissions to access or perform the task required.[6] </p>

                    <strong>Exploit 3: Components with Known Vulnerabilities</strong>

                    <p>As a user, keep your device up to date and ensure the software you are using is up to date. As a programmer ensure that the code you are using is not have known vulnerabilities, if so send out a patch as soon as possible to ensure users are safe.</p>
                </div>

                <div className="report-header">
                    <h3>Section 3: Security Policy</h3>
                </div>

                <div className="box">

                    <strong>Exploit 1: SQL Injection</strong>

                    <p>The main security policy in order to prevent SQL injection would be at coding level. Security must be baked into the Software Development lifecycle ensuring developers are aware of the risks associated with the code they write. Sanitizing code using methods such as escaping characters and parameterized statements will help insure injection attacks are thwarted.</p>


                    <strong>Exploit 2: Broken Access Control/Cross Site Request Forgery (CSRF)</strong>

                    <p>There are several security policies that can be implemented to prevent CSRF attacks.</p>

                    <div className="report-list">

                        <ul>
                            <li>Server should not send unencrypted user data through JSON requests.</li>

                            <li>Server should require per-session or per-request tokens as a way to verify the request is made from the original client.[4] These tokens should not be transmitted using cookies and using JavaScript instead, and also implement preventative measures to make sure that the token is not leaked in the browser history or log files. [4] Furthermore, hashing the token with a secret salt is usually prefer over key encryption as it takes less resources.</li>

                            <li>Using frameworks to build the web application with built-in CSRF protection such as .NET that automatically adds tokens to resources.</li>

                            <li>Implementing the double submit cookie method that sends a random value in a cookie and as a request parameter. [4] The cookie value is generated when the user visits the application and is unique to their machine. This value should be required for every single request made, thus adding another layer of protection. </li>

                        </ul>

                    </div>

                    <strong>Exploit 3: Components with Known Vulnerabilities</strong>

                    <p>You should have an internal security policy that will allow you to better protect company from having vulnerable components, such as:</p>

                    <div className="report-list">
                        <ul>

                            <li>Ensuring that components are safe, and no known vulnerabilities are present when coding the application</li>

                            <li>Periodically scan the application using scanner tools that can detect components with vulnerabilities</li>

                            <li>If a vulnerability is made public or found ensure that a patch is set up as soon as possible to make sure your application is not vulnerable</li>

                            <li>Use frameworks and libraries that are still and will be supported in the future</li>

                            <li>Avoid using legacy frameworks as these will not be updated and in order to fix the vulnerability you will need to replace it making the patch take a longer time.</li>

                        </ul>
                    </div>


                </div>

            </div >

        );
    }
}

export default Report;