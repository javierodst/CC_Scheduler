import React from 'react';
import './Report.css';
import SQLPIC from './SQL_Diagram.jpg';
import KNOWNPIC from './KnownVulnerabilities_Diagram.jpg';
class Report extends React.Component {


    render() {

        return (

            <div className="report">
                <h1>Report</h1>
                <div></div>
                <h3>Section 1: Exploit Summary</h3>

                <p>There 4 different specific exploits that will be covered in this report. The exploits will be demonstrated on a web application. The vulnerabilities will be given a brief description in the following segment:</p>

                <div className="report-list" >
                    <ul>
                        <li>
                            <strong>Exploit 1: SQL injection</strong>

                            <p>An injection attack specifically a SQL injection attack consists of malicious code that will expose a vulnerability capable of accessing the database layer of an application. SQL injection allows an attacker to spoof identity, allow operations on data from retrieving to changing it. Also be able to gain unauthorized access to the system being targeted. </p>
                        </li>

                        <li>
                            <strong>Exploit 2: Broken Access Control/Cross Site Request Forgery (CSRF)</strong>

                            <p>Access control in a web application ensures that each user type can access resources and actions within their intended permissions. A broken access control allows for horizontal, vertical or context-based privilege escalation that an attacker can exploit, giving them unauthorized ability to gather, modify or destroy data. </p>

                            <p>A flaw in access control may allow an attacker to execute a <strong>Cross Site Request Forgery</strong> (CSRF). This attack targets other users by forcing them to perform action(s) unintentionally, and depending on the severity, grant the attacker privileges or control over the user’s account.</p>
                        </li>

                        <li>
                            <strong>Exploit 3: Components with Known Vulnerabilities</strong>

                            <p>When designing a program or website, programmers may use components in their site with known vulnerabilities. The programmer may or may not be aware of it, depending or not if they have done some research on the component they are using or if they were warned that the component has vulnerabilities. </p>
                        </li>

                    </ul>

                </div>

                <div>
                    <strong>Operating System</strong>

                    <p>All operating systems need some form of access controls for managing files or directories with different permissions types (read-only, read-and-write, execute, etc). Distributed OS, Batch OS, Time-Sharing OS, Hard and Soft Real-Time systems, and Network systems provide different and unique threats when it comes to failures in access control. Our topic of discussion focuses on web-application vulnerabilities, thus narrowing our focus towards systems that allow for web access is most relevant.</p>

                    <p>This vulnerability may affect many different types of OS’s, depending on if it is a web application or if it is a program. Web applications can affect many OS’s because almost all OS’s support a web browser, while only some applications can run on certain OS.</p>

                </div>

                <div className="box">
                    <strong>Protocals/Services/Applications</strong>

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

                <div className="box">
                    <strong>Varients</strong>

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



                <h3>Section 2: The Attack</h3>

                <div className="box">
                    <strong>Description and Network Diagram</strong>

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


            </div>

        );
    }
}

export default Report;