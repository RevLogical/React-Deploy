# Deployment Monitoring

I have never architected a comprehensive monitoring and logging strategy for a given application, but I have worked directly with a variety of application and infrastructure architects at Netsmart as well as our SRE team and our other DevOps and Automation engineers in developing specific monitoring solutions that scale across our cloud infrastructure. I have developed a number of Ansible roles that install and configure our various monitoring solutions, including Telegraf, Sensu Go, Splunk, and Pingdom. I led 2 separate projects where I designed Jenkins deployment pipelines that incorporated these solutions which needed to scale across our enterprise private and public cloud infrastructure.

Based on my previous experience and knowledge I would try to cover the below areas when designing a monitoring strategy for a React app:

- General uptime and availability reporting of all relevant endpoints like user auth and APIs, etc.
- Errors and Logging
	- Effective error handling messages and centralized logging system like CloudWatch for root cause analysis and prioritizing responses
	- E.g., api and web requests errors, excessive auth attempts, app crashes, try-catch statements, and React error boundaries
- Dashboards and Alerts
	- Status dashboard, ideally public
	- Internal dashboards for general reporting and performance analysis
	- Automated chat notifications for relevant events
	- On call contacts for relevant events
- Performance
	- Page and component load times
	- API and endpoint response times
	- Hardware like cpu, memory, storage, network, I/O, etc
	- AWS infrastructure and scaling
- UX
	- real world live systems testing, e.g. Selenium
