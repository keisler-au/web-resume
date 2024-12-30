import sys

from django.db import migrations


def populate_data(apps, schema_editor):
    Page = apps.get_model("content", "Page")
    PageHeading = apps.get_model("content", "PageHeading")
    PageBody = apps.get_model("content", "PageBody")
    BodyCard = apps.get_model("content", "BodyCard")
    CardContent = apps.get_model("content", "CardContent")

    home_page = Page.objects.create(name="home")
    about_page = Page.objects.create(name="about")
    experience_page = Page.objects.create(name="experience")
    projects_page = Page.objects.create(name="projects")
    contact_page = Page.objects.create(name="contact")

    PageHeading.objects.create(
        page=home_page,
        main_heading="Josh Keisler",
        sub_heading="Full-Stack Developer | CI/CD Enthusiast | Scalable Web Solutions",
        description="I am passionate about helping people and building scalable, user-friendly applications that solve real-world problems.",
    )
    PageHeading.objects.create(
        page=about_page,
        main_heading="Learning",
        sub_heading=None,
        description="My background in psychology at university and a self-learning style within IT has given me a unique technical and user-centric perspective.",
    )
    PageHeading.objects.create(
        page=experience_page,
        main_heading="Professional Experience",
        sub_heading=None,
        description="Experience in software development and operational support, with expertise in various technologies.",
    )
    PageHeading.objects.create(
        page=projects_page,
        main_heading="Web Resume Tech Stack",
        sub_heading=None,
        description="Explore the different technologies I have used in building this website:",
    )
    PageHeading.objects.create(
        page=contact_page,
        main_heading="Get in Touch",
        sub_heading=None,
        description="Feel free to reach out through the email form, LinkedIn, or GitHub, I look forward to hearing from you!",
    )

    psychology_section = PageBody.objects.create(
        page=about_page, label="Psychology Degree"
    )
    psychology_degree_card = BodyCard.objects.create(
        body=psychology_section,
        title="B.A. (Honours) in Psychology, Curtin University, WA",
    )
    CardContent.objects.create(
        card=psychology_degree_card,
        description="I started studying Psychology because I want to help people and I found the topic interesting.",
    )
    CardContent.objects.create(
        card=psychology_degree_card,
        description="But being a professional psychologist is not who I want to be.",
    )
    CardContent.objects.create(
        card=psychology_degree_card,
        description="I want to help people, and I am passionate about technology as a way to do that.",
    )
    psychology_it_card = BodyCard.objects.create(
        body=psychology_section,
        title="Psychology Degree within IT",
    )
    CardContent.objects.create(card=psychology_it_card, description="Critical thinking")
    CardContent.objects.create(
        card=psychology_it_card,
        description="Learning from documentation and research papers",
    )
    CardContent.objects.create(
        card=psychology_it_card, description="Writing documentation and research papers"
    )
    CardContent.objects.create(
        card=psychology_it_card,
        description="How to prioritise assignments and meet deadlines",
    )
    CardContent.objects.create(
        card=psychology_it_card, description="Organise projects and work with clients"
    )
    awards_projects_card = BodyCard.objects.create(
        body=psychology_section,
        title="Awards and Key Projects",
    )
    CardContent.objects.create(
        card=awards_projects_card,
        description="Letter of Commendation for outstanding academic performance, after achieving a grade average above 80%.",
    )
    CardContent.objects.create(
        card=awards_projects_card,
        description="Dissertation on a behavioural model for psychological well-being.",
    )
    CardContent.objects.create(
        card=awards_projects_card,
        description="It involved me recruiting and coordinating over 100 participants, who volunteered for a week-long data analysis.",
    )

    self_learning_section = PageBody.objects.create(
        page=about_page, label="Self-Learning"
    )
    self_taught_card = BodyCard.objects.create(
        body=self_learning_section,
        title="Becoming a Self-Taught Technologist",
    )
    CardContent.objects.create(
        card=self_taught_card,
        description="I started learning web development and tech through online resources.",
    )
    CardContent.objects.create(
        card=self_taught_card,
        description="I quickly became enamoured by Python, and eventually my journey led me to JavaScript, CSS, SQL, and the common web-related technologies.",
    )
    CardContent.objects.create(
        card=self_taught_card,
        description="Self-learning gave me the opportunity to better understand how I learn, explore my own curiosity, and develop the discipline and direction needed to understand the vast landscape of software development.",
    )
    core_tools_card = BodyCard.objects.create(
        body=self_learning_section,
        title="Mastering Core Tools",
    )
    CardContent.objects.create(
        card=core_tools_card,
        description="Studying at university had given me tools for learning and building my own curriculum, but after 12 months I wanted hands-on experience and personally learn from other people.",
    )
    CardContent.objects.create(
        card=core_tools_card,
        description="I wanted to put into practice my newly acquired skills, so I built a small Weather Report application.",
    )
    CardContent.objects.create(
        card=core_tools_card, description="It's crude, it's naïve, and it's honest."
    )
    CardContent.objects.create(
        card=core_tools_card,
        description="I am glad to say I have learnt a lot since then, and I am still proud of what I was able to demonstrate at that time.",
    )
    weather_app_card = BodyCard.objects.create(
        body=self_learning_section,
        title="The Weather App",
    )
    CardContent.objects.create(
        card=weather_app_card,
        description="This was my first project that I created in 2021, the public API has since been decommissioned but it demonstrated my understanding of RESTful APIs and React at that time, and it lead to my employment at Infosys.",
    )
    CardContent.objects.create(
        card=weather_app_card,
        description="https://keisler-au.github.io/weather-project/",
    )

    infosys_section = PageBody.objects.create(
        page=experience_page, label="Infosys - Graduate Position"
    )
    bootcamp_card = BodyCard.objects.create(
        body=infosys_section,
        title="Bootcamp",
    )
    CardContent.objects.create(
        card=bootcamp_card, description="Infosys is a multinational IT company."
    )
    CardContent.objects.create(
        card=bootcamp_card,
        description="The first three months of my employment was a bootcamp in C#, Java, SQL, and Angular.",
    )
    CardContent.objects.create(
        card=bootcamp_card,
        description="The camp consisted of learning, with fortnightly exams to assess our proficiency.",
    )
    CardContent.objects.create(
        card=bootcamp_card,
        description="I was already familiar with SQL, and although I knew Python the strict OOP and static typing of Java and C# was interesting to learn.",
    )
    contract_bhp_card = BodyCard.objects.create(
        body=infosys_section,
        title="Contract to BHP",
    )
    CardContent.objects.create(
        card=contract_bhp_card,
        description="I was contracted out to the multinational Australian mining and metals company, BHP.",
    )
    CardContent.objects.create(
        card=contract_bhp_card,
        description="I worked on a platform that was used daily by the onsite miners and supervisors.",
    )
    CardContent.objects.create(
        card=contract_bhp_card,
        description="The job was a mixture of Level 3 Operational Support and Software Development.",
    )
    CardContent.objects.create(
        card=contract_bhp_card,
        description="I would work through Service Now incident tickets as well as building and optimising features according to Jira tickets.",
    )

    operational_support_section = PageBody.objects.create(
        page=experience_page, label="BHP - Operational Support"
    )
    debugging_card = BodyCard.objects.create(
        body=operational_support_section,
        title="Debugging",
    )
    CardContent.objects.create(
        card=debugging_card,
        description="Understanding the product and how our platform worked.",
    )
    CardContent.objects.create(
        card=debugging_card,
        description="Understanding the container infrastructure in production and investigating CloudWatch logs and metrics.",
    )
    CardContent.objects.create(
        card=debugging_card,
        description="Understanding the codebase and how AWS insights related to the application.",
    )
    CardContent.objects.create(
        card=debugging_card, description="Analysing data and Django Admin records."
    )
    client_roles_card = BodyCard.objects.create(
        body=operational_support_section,
        title="Technical and Client-centric Roles",
    )
    CardContent.objects.create(
        card=client_roles_card, description="Scheduling and managing meetings."
    )
    CardContent.objects.create(
        card=client_roles_card,
        description="Coordinating and practically completing Service Now and Jira tickets.",
    )
    CardContent.objects.create(
        card=client_roles_card,
        description="Writing bug fixes and liaising with clients.",
    )
    CardContent.objects.create(
        card=client_roles_card,
        description="Collaborating with clients to understand their issues and the impact it has on their work.",
    )

    software_developer_section = PageBody.objects.create(
        page=experience_page, label="BHP - Software Developer"
    )
    django_card = BodyCard.objects.create(
        body=software_developer_section,
        title="Django and Graphene",
    )
    CardContent.objects.create(
        card=django_card,
        description="Writing, refactoring, debugging, and optimising within Django's core features (views, serializers, models, admin, templates, etc).",
    )
    CardContent.objects.create(
        card=django_card,
        description="Optimising Graphene queries, mutations, and resolvers.",
    )
    CardContent.objects.create(
        card=django_card,
        description="Debugging to identify and resolve bugs and expensive queries.",
    )
    CardContent.objects.create(
        card=django_card,
        description="Using fixture sets in unit tests and testing environments to alleviate the overhead of prod dumps.",
    )
    react_card = BodyCard.objects.create(
        body=software_developer_section,
        title="React",
    )
    CardContent.objects.create(
        card=react_card,
        description="Learning new concepts and patterns, like prop rendering and config objects.",
    )
    CardContent.objects.create(
        card=react_card,
        description="Learning new frontend tools like MUI, React Relay, and Formik.",
    )
    CardContent.objects.create(
        card=react_card,
        description="Applying TypeScript and unit testing to any new code produced.",
    )
    practices_card = BodyCard.objects.create(
        body=software_developer_section,
        title="New Practices and Technologies",
    )
    CardContent.objects.create(
        card=practices_card,
        description="New Practices: Jira tickets, Sprints, Unit tests for every piece of work produced.",
    )
    CardContent.objects.create(
        card=practices_card,
        description="New Technologies: AWS, Docker, Terraform, Pre-commit.",
    )
    version_control_card = BodyCard.objects.create(
        body=software_developer_section,
        title="Version Control in a Team",
    )
    CardContent.objects.create(
        card=version_control_card,
        description="Implementing and learning from code reviews.",
    )
    CardContent.objects.create(
        card=version_control_card,
        description="Managing feature branches, rebasing, resolving merge conflicts.",
    )
    CardContent.objects.create(
        card=version_control_card, description="Reviewing and approving pull requests."
    )

    aws_section = PageBody.objects.create(page=projects_page, label="AWS")
    aws_card = BodyCard.objects.create(
        body=aws_section,
        title="AWS",
    )
    CardContent.objects.create(
        card=aws_card,
        description="Due to pricing I moved to a Linux VPS, but I successfully deployed to AWS by:",
    )
    CardContent.objects.create(
        card=aws_card,
        description="1. Pushing images to ECR and configuring them into Task Definitions to utilise Fargate.",
    )
    CardContent.objects.create(
        card=aws_card, description="2. Creating Services to run Tasks within ECS."
    )
    CardContent.objects.create(
        card=aws_card,
        description="3. Configuring an ALB with HTTP:80 and HTTPS:443 Listeners and Routing rules to connect to the appropriate Target Groups.",
    )
    CardContent.objects.create(
        card=aws_card,
        description="4. Creating Security Group Inbound and Outbound rules, and modifying its Roles and defined VPC endpoints to allow the tasks to access Parameter Store Secrets.",
    )
    CardContent.objects.create(
        card=aws_card,
        description="5. Creating a separate admin account using IAM rather than defaulting to the root user account.",
    )
    CardContent.objects.create(
        card=aws_card, description="6. Connecting to a Postgres database hosted in RDS."
    )
    CardContent.objects.create(
        card=aws_card,
        description="7. Using CloudWatch Logs for debugging Target Health Check failures.",
    )

    docker_section = PageBody.objects.create(page=projects_page, label="Docker")
    docker_card = BodyCard.objects.create(
        body=docker_section,
        title="Docker",
    )
    CardContent.objects.create(
        card=docker_card,
        description="In containerizing this application with docker I learnt:",
    )
    CardContent.objects.create(
        card=docker_card, description="1. Dockerfile structures and multi-stage builds."
    )
    CardContent.objects.create(
        card=docker_card,
        description="2. How networks can be orchestrated between containers and the host, and the role of docker-compose, Kubernetes, and Docker Swarm in development and production. ",
    )
    CardContent.objects.create(
        card=docker_card,
        description="3. Docker volumes, and its interaction between containers and the host.",
    )

    wsl_section = PageBody.objects.create(page=projects_page, label="WSL")
    wsl_card = BodyCard.objects.create(
        body=wsl_section,
        title="WSL",
    )
    CardContent.objects.create(
        card=wsl_card, description="Working with WSL has helped me understand:"
    )
    CardContent.objects.create(
        card=wsl_card, description="1. The differences between Windows and Linux."
    )
    CardContent.objects.create(
        card=wsl_card,
        description="2. The Linux file structure and where things are run and stored.",
    )
    CardContent.objects.create(
        card=wsl_card,
        description="3. How package managers and dependencies are both a miracle and a nightmare.",
    )

    backend_section = PageBody.objects.create(
        page=projects_page, label="Django and Postgres"
    )
    backend_card = BodyCard.objects.create(
        body=backend_section,
        title="Django and Postgres",
    )
    CardContent.objects.create(
        card=backend_card,
        description="This resume uses a Django and Postgres backend to serve up the text content, giving me more practice with things like data migrations.",
    )
    CardContent.objects.create(
        card=backend_card,
        description="A lot of my previous experience with Django comes from working at BHP, where I completed a lot of development tickets concerning Django and Graphene query optimisation",
    )

    react_section = PageBody.objects.create(page=projects_page, label="React")
    react_card = BodyCard.objects.create(
        body=react_section,
        title="React",
    )
    CardContent.objects.create(
        card=react_card, description="In building the frontend I learnt a lot about:"
    )
    CardContent.objects.create(
        card=react_card,
        description="1. Implementing code designs like render propping.",
    )
    CardContent.objects.create(
        card=react_card, description="2. CSS styling techniques and interactions."
    )
    CardContent.objects.create(
        card=react_card,
        description="3. UI design with technologies like MUI components.",
    )

    github_actions_section = PageBody.objects.create(
        page=projects_page, label="GitHub Actions"
    )
    github_actions_card = BodyCard.objects.create(
        body=github_actions_section,
        title="GitHub Actions",
    )
    CardContent.objects.create(
        card=github_actions_card,
        description="In creating a pipeline I became exposed to:",
    )
    CardContent.objects.create(
        card=github_actions_card,
        description="1. Automating unit test runs within a docker setup.",
    )
    CardContent.objects.create(
        card=github_actions_card,
        description="2. Yaml files and the different settings and configurations.",
    )
    CardContent.objects.create(
        card=github_actions_card,
        description="3. The many servers, infrastructure and deployments options available for the different size and scalability of applications.",
    )

    pre_commit_section = PageBody.objects.create(page=projects_page, label="Pre-commit")
    pre_commit_card = BodyCard.objects.create(
        body=pre_commit_section,
        title="Pre-commit",
    )
    CardContent.objects.create(
        card=pre_commit_card,
        description="Building this into the workflow and using it to enforce linting and styling rules.",
    )


def reverse_data(apps, schema_editor):
    CardContent = apps.get_model("content", "CardContent")
    BodyCard = apps.get_model("content", "BodyCard")
    PageBody = apps.get_model("content", "PageBody")
    PageHeading = apps.get_model("content", "PageHeading")
    Page = apps.get_model("content", "Page")

    CardContent.objects.all().delete()
    BodyCard.objects.all().delete()
    PageBody.objects.all().delete()
    PageHeading.objects.all().delete()
    Page.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ("content", "0001_initial"),  # Adjust this depending on your previous migration
    ]

    operations = (
        [migrations.RunPython(populate_data, reverse_data, atomic=True)]
        if "test" not in sys.argv[1:]
        else []
    )
