import sys

from django.db import migrations


def populate_data(apps, schema_editor):
    Page = apps.get_model("content", "Page")
    PageHeading = apps.get_model("content", "PageHeading")
    PageBody = apps.get_model("content", "PageBody")
    BodyCard = apps.get_model("content", "BodyCard")
    CardContent = apps.get_model("content", "CardContent")

    home_page = Page.objects.create(name="home")
    PageHeading.objects.create(
        page=home_page,
        main_heading="Building Apps for You",
        description="My mission is to build apps that are functionally robust, maintainable, and secure. Our needs evolve, and this should be reflected in the codebase. Software provides freedom through access and automation, and I love the challenge of future-proofing it.",
    )
    home_body = PageBody.objects.create(page=home_page, label="Problem Interests")
    body_card = BodyCard.objects.create(body=home_body, title="Problem Interests")
    CardContent.objects.create(
        card=body_card,
        description="I am passionate about helping people and I want this represented in the problems I am solving. I strongly believe in principles of Sustainability and Equality of Opportunity, and it is equally important to me that people are not just surviving but thriving. Whether it is working in Healthcare or Personal Development; from Mental Health to the Entertainment industry, I want to be solving problems that are going to bring real benefit to peoples' lives.",
    )

    experience_page = Page.objects.create(name="experience")
    PageHeading.objects.create(
        page=experience_page,
        main_heading="Experience",
        description="Whether it is learning a new tech stack, working in a team, or understanding unique and dynamic problems, it is my commitment to architect and build solutions. My experience to-date has been the result of genuine curiosity and interest, if I choose to work for you it means I am invested.",
    )

    software_dev_body = PageBody.objects.create(
        page=experience_page, label="Software Developer"
    )
    software_dev_card = BodyCard.objects.create(
        body=software_dev_body, title="Software Developer"
    )
    CardContent.objects.create(
        card=software_dev_card,
        description="While contracted to BHP I helped develop a platform that was used by field workers and miners to automate and standardise the daily on-site mining operations. As a Software Developer I:",
    )
    CardContent.objects.create(
        card=software_dev_card,
        description="Created new frontend and backend features, such as a page dedicated to logging reports, and a versions-comparisons UI for data points.",
    )
    CardContent.objects.create(
        card=software_dev_card,
        description="Optimised features to resolve performance issues and improve user experience, this often involved backend Graphene and frontend React Relay GQL query optimisation.",
    )
    CardContent.objects.create(
        card=software_dev_card,
        description="Refactored code that improved the readability and reusability of particular functions, such as Django admin file uploads and error-message dependent routing.",
    )
    CardContent.objects.create(
        card=software_dev_card,
        description="Participated in code reviews and actively welcomed feedback to produce the highest code quality possible.",
    )
    CardContent.objects.create(
        card=software_dev_card,
        description="Received an award through Infosys for 'Outstanding Performance'.",
    )

    operational_support_body = PageBody.objects.create(
        page=experience_page, label="Operational Support"
    )
    operational_support_card = BodyCard.objects.create(
        body=operational_support_body, title="Operational Support"
    )
    CardContent.objects.create(
        card=operational_support_card,
        description="At BHP I was also an active member in the Operational Support team, where we maintained the functionality of the production application and liaised with clients. As an Operational Support member I:",
    )
    CardContent.objects.create(
        card=operational_support_card,
        description="Debugged and wrote code fixes for production issues, investigating logs within the AWS infrastructure, reading the codebase, and analysing Django admin records.",
    )
    CardContent.objects.create(
        card=operational_support_card,
        description="Prioritised the user experience by actively talking to them when they raised production incident tickets, this gave me an appreciation for their issues and the impact it has on their work.",
    )
    CardContent.objects.create(
        card=operational_support_card,
        description="Set up meetings and coordinated the collaborative effort between Dev and Operational Support teams when working through production bugs and feature quality tests.",
    )
    CardContent.objects.create(
        card=operational_support_card,
        description="Wrote documentation for the Operational Support team on best practices and debugging techniques for particular features within the platform.",
    )

    graduate_position_body = PageBody.objects.create(
        page=experience_page, label="Graduate Position"
    )
    graduate_position_card = BodyCard.objects.create(
        body=graduate_position_body, title="Graduate Position"
    )
    CardContent.objects.create(
        card=graduate_position_card,
        description="Infosys is a multinational IT company and for the first three months I successfully completed training courses in C#, Java, SQL, and Angular.",
    )
    CardContent.objects.create(
        card=graduate_position_card,
        description="I passed fortnightly exams that assessed our proficiency in the required technologies, and despite already knowing Python the strict OOP and static typing of Java and C# was interesting to learn.",
    )
    CardContent.objects.create(
        card=graduate_position_card,
        description="Prior to Infosys, I had taught myself web development through online resources and I quickly became enamoured by Python, JavaScript, CSS, SQL and Git.",
    )
    CardContent.objects.create(
        card=graduate_position_card,
        description="Infosys hired me after seeing a small UI project I built that pulled data from a public API (which has since been decommisioned). It's crude, it's naïve, and it's honest, gratefully I have learnt a lot since then.",
    )
    CardContent.objects.create(
        card=graduate_position_card,
        description="https://keisler-au.github.io/weather-project/",
    )

    university_body = PageBody.objects.create(page=experience_page, label="University")
    university_card = BodyCard.objects.create(body=university_body, title="University")
    CardContent.objects.create(
        card=university_card,
        description="I have a Bachelor (Honours) degree in Psychology, I want to help people and I find Psychology interesting, though it is not a profession I have decided to pursue. I am now passionate about technology as a way to help others.",
    )
    CardContent.objects.create(
        card=university_card,
        description="Some of the skills I developed at university involve critical thinking, research, academic writing and literature review, prioritising assignments, meeting deadlines, and understanding evidence-based principles for human motivation.",
    )
    CardContent.objects.create(
        card=university_card,
        description="I was awarded a Letter of Commendation for outstanding academic performance after achieving a grade average above 80%, and wrote a dissertation on psychological well-being, which involved me recruiting and coordinating over 100 participants who volunteered for a week-long data analysis.",
    )

    technical_page = Page.objects.create(name="technical")
    PageHeading.objects.create(
        page=technical_page,
        main_heading="Technical Skills",
        description="We need technical skills and core principles to turn visions into products. Below I have outlined what I see as the main tenets of an application, along with my experience in the technologies that go into building these foundations.",
    )

    reliable_body = PageBody.objects.create(page=technical_page, label="Reliable")
    reliable_card = BodyCard.objects.create(body=reliable_body, title="Reliable")
    CardContent.objects.create(card=reliable_card, description="Django:")
    CardContent.objects.create(
        card=reliable_card,
        description="This resume uses Django and a Postgres DB to serve up the text content.",
    )
    CardContent.objects.create(
        card=reliable_card,
        description="For BHP, I optimised key server-side functions, focusing on Django and Graphene queries within views, serializers, mutations and resolvers.",
    )
    CardContent.objects.create(
        card=reliable_card,
        description="I wrote, refactored, and debugged functionality within Django's core features (views, serializers, models, admin, templates, etc).",
    )
    CardContent.objects.create(
        card=reliable_card,
        description="For every piece of code I produced I wrote accompanying unit tests and also utilised fixture sets to move away from the overhead of prod dumps.",
    )
    CardContent.objects.create(card=reliable_card, description="React:")
    CardContent.objects.create(
        card=reliable_card,
        description="For BHP I built new features using tools including MUI, React Relay, and Formik. I also routinely made code improvements such as client-side data validation, which were often inspired by user interactions and incident tickets.",
    )
    CardContent.objects.create(
        card=reliable_card,
        description="For this resume I used similar tools (React, MUI) and implemented design patterns that I learnt such as prop rendering. I have also used Typescript and written unit tests for key operations.",
    )

    maintainable_body = PageBody.objects.create(
        page=technical_page, label="Maintainable"
    )
    maintainable_card = BodyCard.objects.create(
        body=maintainable_body, title="Maintainable"
    )
    CardContent.objects.create(card=maintainable_card, description="Agile Methodology:")
    CardContent.objects.create(
        card=maintainable_card,
        description="I participated in daily scrums, sprint planning and retrospection, and backlog grooming. Jira tickets, Sprints, Unit tests for every piece of work produced.",
    )
    CardContent.objects.create(card=maintainable_card, description="Git:")
    CardContent.objects.create(
        card=maintainable_card,
        description="As a developer I made a regular practice of managing feature branches, rebasing, and resolving merge conflicts.",
    )
    CardContent.objects.create(
        card=maintainable_card,
        description="I participated in code reviews and approving pull requests, while actively taking on any feedback and advice in how to improve the quality of my code.",
    )
    CardContent.objects.create(card=maintainable_card, description="Pre-Commit:")
    CardContent.objects.create(
        card=maintainable_card,
        description="I followed BHP's lead and built Pre-Commit into this resumes workflow to automate and enforce quality styling standards.",
    )

    automating_body = PageBody.objects.create(page=technical_page, label="Automating")
    automating_card = BodyCard.objects.create(body=automating_body, title="Automating")
    CardContent.objects.create(card=automating_card, description="Docker:")
    CardContent.objects.create(
        card=automating_card,
        description="I have used multi-stage builds for the docker images, docker-compose for network and volume orchestration, and I am looking to implement Kubernetes for production container management.",
    )
    CardContent.objects.create(card=automating_card, description="CI/CD:")
    CardContent.objects.create(
        card=automating_card,
        description="Within this project I automated unit test execution, making use of the docker-compose container configuration.",
    )
    CardContent.objects.create(
        card=automating_card,
        description="Exploring CI/CD options and GitHub Actions showed me the many server, infrastructure and deployment options that are available for differing sized and scalable applications.",
    )
    CardContent.objects.create(
        card=automating_card, description="Dependency Management:"
    )
    CardContent.objects.create(
        card=automating_card,
        description="Managing dependencies gave me greater exposure to the Linux file structure and its executables, and an understanding that dependencies and package managers are both a miracle and a nightmare.",
    )

    scaleable_body = PageBody.objects.create(page=technical_page, label="Scaleable")
    scaleable_card = BodyCard.objects.create(body=scaleable_body, title="Scaleable")
    CardContent.objects.create(card=scaleable_card, description="AWS:")
    CardContent.objects.create(
        card=scaleable_card,
        description="Having learnt the AWS infrastructure that BHP used for their project I decided to replicate it for this web resume. I have since moved to a Linux VPS, but I had successfully deployed to AWS and made use of its scalability features.",
    )
    CardContent.objects.create(
        card=scaleable_card,
        description="Successfully deploying to AWS involved using; ECR, Fargate, ECS, ALB, Security Group, VPC endpoints, Parameter Store Secrets, IAM, RDS, CloudWatch.",
    )
    CardContent.objects.create(card=scaleable_card, description="Redis:")
    CardContent.objects.create(
        card=scaleable_card,
        description="For BHP I optimised server-side functionality and cached tables that were read often and infrequently updated.",
    )

    contact_page = Page.objects.create(name="contact")
    PageHeading.objects.create(
        page=contact_page,
        main_heading="Get in Touch",
        description="If you have a proposal, idea, feedback, or just want to say Hi, I would love to hear from you!",
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
        ("content", "0001_initial"),
    ]

    operations = (
        [migrations.RunPython(populate_data, reverse_data, atomic=True)]
        if "test" not in sys.argv[1:]
        else []
    )
