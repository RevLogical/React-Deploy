# Optional Task 1

## Bug COUNT-1; When accessing the website, I am presented with a blank screen.
Due to my limited experience with React and no experience with Redux I wasn't able to clue in to the incrementing bug with the time I had, and I decided to make sure I could complete some of the other tasks before I ran out of time. I haven't focused much on the front end so far with my software development path, but I'd like to take some deeper dives into it ASAP, React being next on my list.

## Deploy COUNT-2;
I do have experience with Docker. At Lending Standard we needed to setup our own Docker-based developer environment, and at Netsmart I prototyped some Docker-based environments for developing and testing our internal Ansible roles with molecule against multiple operating systems. I also volunteered for Code For KC where I helped setup a Docker-based Flask backend with TDD and pytest.

For this app, I setup a Docker developer container with `docker-compose.yml` and a production container with `docker-compose-prod.yml` both using the `Dockerfile` I made. Although, `parcel build` fails on the prod Docker build as I emailed you about. The prod build uses the recommended builder pattern to result in smaller deployment images and quicker rebuilds when Docker can rely on its cache.

I haven't directly used any container orchestration technologies outside of various AWS tutorials so my understanding of how container orchestration can be setup to handle specific failures as David asked does not go very deep at all. So, I diagrammed what I could of a client-side React app with AWS ECS. I also diagrammed a CI/CD pipeline that would work for this kind of deployment. Container orchestration is also high on my list to skill up.