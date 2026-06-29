export type Locale = 'en' | 'vi';

export const translations = {
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            work: 'Work',
            process: 'Process',
            about: 'About',
            startProject: 'Start a Project',
        },
        footer: {
            tagline: 'Design systems. Deployment. Maintenance.',
            builtForTime: 'Built for time.',
            navigate: 'Navigate',
            getInTouch: 'Get in touch',
            allRightsReserved: 'All rights reserved.',
            taglineBottom: 'Systems, not pages.',
        },
        cta: {
            title: "Let's Build Something That Lasts",
            subtitle: "If you're ready to invest in structure over shortcuts, we should talk.",
            button: 'Start a Conversation',
        },
        hero: {
            badge: "Software Support Studio",
            headlineWords: ['Design,', 'build,', 'and', 'support'],
            headlineGradient: 'software that keeps moving.',
            subtitle: 'From design to deployment — one connected stack for web, automation, and AI.',
            button: 'Start a Project',
        },
        services: {
            title: "Services We",
            titleGradient: "Deliver",
            subtitle: "Design, engineering, hosting, automation, and long-term support for software teams that need more than a one-time launch.",
            items: {
                ux: {
                    title: "Web Design & UX",
                    description: "Figma workflows, wireframes, prototypes, and interface systems built around clear user journeys."
                },
                building: {
                    title: "Website Building & Architecture",
                    description: "Web apps, portals, database planning, API flows, and delivery patterns designed for maintainability."
                },
                hosting: {
                    title: "Hosting & CI/CD",
                    description: "Cloud setup, deployment pipelines, backups, SSL, monitoring, and infrastructure that stays predictable."
                },
                maintenance: {
                    title: "Maintenance & Scalability",
                    description: "Security patches, performance tuning, observability, and technical support for products that keep evolving."
                },
                automation: {
                    title: "AI Agents & Automation",
                    description: "LLM integrations, workflow automation, support bots, and content pipelines that reduce manual work."
                },
                analytics: {
                    title: "Data Analysis & Reporting",
                    description: "Dashboards, funnel tracking, analytics reviews, and decision-ready reporting for product and ops teams."
                }
            }
        },
        process: {
            title: "How We",
            titleGradient: "Work",
            steps: {
                step1: {
                    title: "Audit & Scope",
                    description: "We audit the product, workflow, and constraints first so the scope, risks, and technical priorities are clear before build work starts."
                },
                step2: {
                    title: "Design the System",
                    description: "UX direction, database shape, API boundaries, and automation flows are mapped before build work scales."
                },
                step3: {
                    title: "Build & Integrate",
                    description: "Web apps, internal tools, integrations, and deployment workflows are delivered as one connected stack."
                },
                step4: {
                    title: "Support & Improve",
                    description: "After launch we stay involved with maintenance, monitoring, performance tuning, analytics, and content support."
                }
            },
            support: {
                badge: "ONGOING SUPPORT",
                title: "Launch once.",
                titleGradient: "Improve continuously.",
                description: "We stay involved with maintenance, monitoring, backups, deployment safety, content updates, and performance reviews so the stack keeps moving after release.",
                monitoring: "Monitoring",
                saferDeploys: "Safer Deploys",
                button: "Discuss Support"
            }
        },
        philosophy: {
            title: "Built for",
            titleGradient: "Time",
            p1: "Most web projects are built to launch. Ours are built to last. We approach every system with longevity in mind, designing structures that adapt to change, not collapse under it.",
            p2: "A website is not a brochure. It's infrastructure. We treat design decisions as architectural ones, every component, every convention must survive updates, scale with content, and remain stable under maintenance.",
            p3: "We don't chase trends. We build systems that stay coherent over years, not weeks. The goal isn't novelty. It's durability."
        },
        about: {
            badge: "The Team",
            title: "Powered by",
            titleGradient: "Expertise",
            subtitle: "We're a remote-first team of engineers, architects, and designers united by a passion for building exceptional software.",
            engineTitle: "The Engine",
            engineSubtitle: "Three pillars working in perfect harmony",
            cylinders: {
                ux: {
                    title: "Strategy",
                    description: "Data-driven decisions. We analyze market opportunities and architect solutions that align business goals with technical feasibility."
                },
                building: {
                    title: "Systems",
                    description: "Infrastructure as code. We build resilient, scalable systems with modern DevOps practices and cloud-native architectures."
                },
                hosting: {
                    title: "Product",
                    description: "Design systems that scale. We craft user experiences that are beautiful, accessible, and consistent across platforms."
                }
            },
            valuesTitle: "Our Values",
            valuesSubtitle: "The principles that guide everything we do",
            values: {
                transparency: {
                    title: "Transparency",
                    description: "Clear communication at every step"
                },
                quality: {
                    title: "Quality",
                    description: "Clean, tested, maintainable code"
                },
                ownership: {
                    title: "Ownership",
                    description: "Your success is our success"
                },
                innovation: {
                    title: "Innovation",
                    description: "Latest technologies and practices"
                }
            },
            joinTitle: "Join the Engine",
            joinSubtitle: "Ready to work with a team that cares as much about your product as you do?",
            joinButton: "Start a Conversation"
        },
        contact: {
            title: "Contact",
            subtitle1: "Have a project in mind? Or just a question?",
            subtitle2: "We'd like to hear from you.",
            emailHeader: "Email",
            expectHeader: "What to Expect",
            expect1: "We respond within 2 business days.",
            expect2: "If there's a fit, we'll schedule a short discovery call.",
            expect3: "From there, we'll determine next steps together.",
            messageSent: "Message sent",
            sentSuccess: "We'll be in touch within 2 business days.",
            form: {
                name: "Name",
                namePlaceholder: "Your name",
                email: "Email",
                emailPlaceholder: "you@company.com",
                company: "Company",
                companyOptional: "(optional)",
                companyPlaceholder: "Your company",
                service: "Service Interest",
                serviceSelect: "Select a service...",
                budget: "Budget Range",
                budgetOptional: "(optional)",
                budgetSelect: "Select range...",
                message: "Message",
                messagePlaceholder: "Tell us about your project...",
                submit: "Send Message",
                sending: "Sending..."
            },
            services: {
                ux: 'Web Design & UX Systems',
                building: 'Website Building & System Architecture',
                hosting: 'Hosting, DevOps & Infrastructure',
                maintenance: 'Maintenance & Performance',
                automation: 'AI Agents & Workflow Automation',
                analytics: 'Data Analysis & Reporting',
                cms: 'Content Operations & CMS Support',
                other: 'Other'
            },
            budgetOptions: {
                under_1k: 'Under $1,000',
                _1k_5k: '$1,000 – $5,000',
                _5k_10k: '$5,000 – $10,000',
                _10k_plus: '$10,000+',
                tbd: 'Not sure yet'
            }
        },
        processPage: {
            badge: "How We Deliver",
            title: "Engineering",
            titleGradient: "Rigor",
            subtitle: "We build with a focus on code design, security boundaries, containerized deployment, and ongoing metrics after launch.",
            deliverablesHeader: "Deliverables",
            phase: "Phase",
            ctaTitle: "Ready for a Rigorous Build?",
            ctaSubtitle: "Let's discuss how we can engineer your product to last, with clear deliverables at every phase.",
            ctaButton: "Start a Conversation",
            phases: {
                phase1: {
                    title: "Architecture",
                    description: "We define the foundation. Clean contracts, scalable data models, and technology validation.",
                    deliverables: [
                        "Technical requirements document",
                        "API specification (OpenAPI 3.0)",
                        "Database schema design",
                        "Infrastructure architecture diagram",
                        "Technology stack validation"
                    ]
                },
                phase2: {
                    title: "Development",
                    description: "Modular development. Component-driven UI, typed APIs, and rigorous Git workflow.",
                    deliverables: [
                        "Feature branches with PR reviews",
                        "Component library documentation",
                        "API implementation with tests",
                        "Integration test suite",
                        "Weekly demo deployments"
                    ]
                },
                phase3: {
                    title: "DevOps & Scale",
                    description: "Automated pipelines, containerized deployment, and proactive monitoring ensure resilience.",
                    deliverables: [
                        "CI/CD pipeline configuration",
                        "Docker containerization",
                        "Kubernetes manifests",
                        "Monitoring & alerting setup",
                        "Performance optimization"
                    ]
                }
            }
        },
        servicesPage: {
            badge: "OUR CAPABILITIES",
            title: "Full Stack",
            titleGradient: "Engineering",
            subtitle: "From branding and layouts to cloud architecture and ongoing updates, we shape code to support your business.",
            button: "View Details",
            discussSupport: "Discuss Support",
            heroTitlePrefix: "Software Delivery",
            heroTitleGradient: "End-To-End",
            heroSubtitle: "We don't just write code. We build the architecture, design the interfaces, set up the deployments, and handle long-term scalability.",
            heroButton: "Explore Our Process",
            heroLink: "Book a Strategy Call",
            ctaTitlePrefix: "Ready to build the",
            ctaTitleGradient: "next big thing",
            ctaButton: "Book a Consultation",
            systemsSupported: "Systems We Currently Support",
            items: {
                ux: {
                    title: "Web Design & UX Systems",
                    slogan: "Interfaces planned for clarity, conversion, and real workflows.",
                    description: "We design in Figma before we build. That includes UX research, user flows, wireframes, clickable prototypes, brand systems, and reusable design libraries. The goal is not just to make things look good. It is to create interfaces your team can keep extending without visual chaos."
                },
                building: {
                    title: "Website Building & Architecture",
                    slogan: "From marketing sites to portals, dashboards, and internal tools.",
                    description: "We build custom websites and software systems with the structure behind them: API contracts, database schema planning, architecture diagrams, CMS decisions, and technical roadmaps. This is where web development, database design, build tooling, and workflow planning come together as one delivery stream."
                },
                hosting: {
                    title: "Hosting, DevOps & Infrastructure",
                    slogan: "Deployment pipelines and cloud foundations that stay predictable.",
                    description: "We set up hosting the way teams actually need it: VPS or cloud, Dockerized deployment, CI/CD pipelines, reverse proxy, SSL, automated backups, monitoring, and rollback planning. Whether the stack lives on AWS, GCP, Azure, or a lean VPS, we shape it for stability and repeatable releases."
                },
                maintenance: {
                    title: "Maintenance, Performance & Scalability",
                    slogan: "Long-term care for software that keeps changing after launch.",
                    description: "Maintenance is not only bug fixing. We handle performance tuning, Core Web Vitals, observability, security hardening, uptime checks, patching, and scale reviews as your stack grows. We can also fold in technical SEO, schema work, and ongoing optimization when the product depends on search visibility."
                },
                automation: {
                    title: "AI Agents & Workflow Automation",
                    slogan: "Automate repetitive work without breaking the stack.",
                    description: "We integrate AI where it is useful: support bots, report automation, proposal generation, smart dashboards, custom LLM workflows, and internal assistants connected to your real data. That also includes Zapier, Make, and custom API automations that remove copy-paste operations from the team."
                },
                analytics: {
                    title: "Data Analysis & Reporting",
                    slogan: "Dashboards and insights your team can actually use.",
                    description: "We help teams turn operational and product data into something actionable: KPI dashboards, funnel analysis, heatmaps, reporting flows, and monthly insight reviews. Instead of raw numbers sitting in disconnected tools, we shape them into decision-ready reporting for product, marketing, and operations."
                },
                cms: {
                    title: "Content Operations & CMS Support",
                    slogan: "Keep content moving without manual bottlenecks.",
                    description: "We support the day-to-day content side too: blog publishing workflows, product updates, landing page refreshes, structured content systems, and AI-assisted content pipelines with review controls. If your team regularly edits content, we design the process so updates are faster, safer, and easier to delegate."
                }
            }
        },
        work: {
            badgeCrossVertical: "Cross-Vertical",
            descCrossVertical: "Case studies across EdTech, FinTech, commerce, and infrastructure systems.",
            badgeArchitectureLed: "Architecture-Led",
            descArchitectureLed: "Product stories focused on systems, resilience, and scale rather than templates.",
            title: "Engineered",
            titleGradient: "Solutions",
            subtitle: "From platforms for thousands of active users to high-performance real estate databases. We write details, not copy.",
            challenge: "Challenge",
            architecture: "Architecture",
            badge: "Case Studies",
            ctaTitle: "Want to see your project here?",
            ctaSubtitle: "Let's discuss how we can bring your SaaS vision to life.",
            ctaButton: "Start Your Project",
            categories: {
                all: "All",
                edtech: "EdTech",
                ecommerce: "E-commerce",
                realestate: "Real Estate",
                enterprise: "Enterprise Training",
                internal: "Internal Tools",
                cybersecurity: "IT & Cybersecurity"
            },
            projects: {
                academix: {
                    description: "A comprehensive learning management system with role-based access for instructors and students, featuring automated content generation.",
                    challenge: "Multi-tenant LMS for 10k+ users with complex role hierarchies and real-time collaboration.",
                    architecture: "Real-time progress tracking with Socket.io, modular microservices architecture, PostgreSQL with row-level security."
                },
                ecofit: {
                    description: "Full-scale e-commerce solution with integrated inventory management and seamless payment processing via Stripe.",
                    challenge: "High-volume inventory & payment sync across multiple warehouses and sales channels.",
                    architecture: "Event-driven architecture with message queues for order processing, eventual consistency model."
                },
                nclake: {
                    description: "A waterfront property listing platform specializing in lakefront homes and lots in the Blue Ridge Mountain Foothills of North Carolina.",
                    challenge: "Integrating reliable, real-time MLS data while providing a high-performance visual search experience.",
                    architecture: "Next.js optimized static builds, headless CMS integration, geographic querying via PostGIS."
                },
                portalLearning: {
                    description: "An employee training and compliance management platform with course assignment, phishing simulations, and real-time progress tracking dashboards.",
                    challenge: "Ensuring strict state compliance and auditability in training modules across thousands of disparate enterprise roles.",
                    architecture: "Serverless functions for tracking interactions, robust RBAC, multi-tenant separated data architecture."
                },
                enterpriseCore: {
                    description: "Legacy-to-Cloud transformation for large scale organizations, moving from WinForms to modern web dashboards.",
                    challenge: "Migrating a monolithic on-prem application without data loss or downtime during the transition.",
                    architecture: "Strangler Fig pattern using API gateways, containerized microservices in AWS EKS, parallel database syncing."
                },
                selecttech: {
                    description: "AI-powered IT solutions & cybersecurity platform for a 23-year NC-based MSP — covering compliance management, managed IT, PC-Mac-Mobile repair services, and infrastructure.",
                    challenge: "Consolidating a wide range of services (FTC Safeguards, PCI, HIPAA compliance, device repair, network infrastructure) into one cohesive, modern web presence.",
                    architecture: "Vite + React SPA with modular service pages, animated UI with Framer Motion, SEO-optimized static output, integrated contact and pricing flows."
                }
            }
        }
    },
    vi: {
        nav: {
            home: 'Trang chủ',
            services: 'Dịch vụ',
            work: 'Dự án',
            process: 'Quy trình',
            about: 'Giới thiệu',
            startProject: 'Bắt đầu dự án',
        },
        footer: {
            tagline: 'Hệ thống thiết kế. Triển khai. Bảo trì.',
            builtForTime: 'Xây dựng để trường tồn.',
            navigate: 'Điều hướng',
            getInTouch: 'Liên hệ',
            allRightsReserved: 'Bảo lưu mọi quyền.',
            taglineBottom: 'Hệ thống, không chỉ là trang web.',
        },
        cta: {
            title: 'Hãy xây dựng những giá trị trường tồn',
            subtitle: 'Nếu bạn đã sẵn sàng đầu tư vào sự bài bản thay vì đi đường tắt, chúng ta hãy cùng trò chuyện.',
            button: 'Bắt đầu thảo luận',
        },
        hero: {
            badge: "Studio Vận hành & Phát triển Phần mềm",
            headlineWords: ['Thiết kế,', 'xây dựng,', 'và', 'vận hành'],
            headlineGradient: 'những phần mềm luôn tiến tới.',
            subtitle: 'Từ thiết kế đến triển khai — một giải pháp đồng bộ cho web, tự động hóa và AI.',
            button: 'Bắt đầu dự án',
        },
        services: {
            title: "Các dịch vụ chúng tôi",
            titleGradient: "cung cấp",
            subtitle: "Thiết kế, kỹ thuật, hosting, tự động hóa và hỗ trợ dài hạn cho các đội ngũ phát triển phần mềm cần nhiều hơn là một lần ra mắt.",
            items: {
                ux: {
                    title: "Thiết kế Web & UX",
                    description: "Quy trình Figma, wireframe, prototype và hệ thống giao diện xây dựng quanh hành trình trải nghiệm rõ ràng."
                },
                building: {
                    title: "Phát triển Web & Kiến trúc",
                    description: "Ứng dụng web, cổng thông tin, thiết lập database, luồng API và mô hình chuyển giao hướng tới khả năng bảo trì cao."
                },
                hosting: {
                    title: "Hosting & CI/CD",
                    description: "Thiết lập đám mây, pipeline triển khai tự động, sao lưu, SSL, giám sát và hạ tầng luôn vận hành ổn định."
                },
                maintenance: {
                    title: "Bảo trì & Mở rộng",
                    description: "Vá lỗi bảo mật, tối ưu hiệu suất, hệ thống giám sát trạng thái và hỗ trợ kỹ thuật cho các sản phẩm không ngừng phát triển."
                },
                automation: {
                    title: "AI Agents & Tự động hóa",
                    description: "Tích hợp LLM, tự động hóa quy trình công việc, chatbot hỗ trợ và hệ thống biên tập nội dung giúp giảm thiểu tác vụ thủ công."
                },
                analytics: {
                    title: "Phân tích Dữ liệu & Báo cáo",
                    description: "Dashboard theo dõi, phân tích phễu chuyển đổi, đánh giá chỉ số và báo cáo phân tích phục vụ trực tiếp cho đội ngũ sản phẩm và vận hành."
                }
            }
        },
        process: {
            title: "Quy trình",
            titleGradient: "làm việc",
            steps: {
                step1: {
                    title: "Đánh giá & Xác định quy mô",
                    description: "Chúng tôi đánh giá sản phẩm, quy trình và các rào cản kỹ thuật để làm rõ phạm vi, rủi ro và các ưu tiên trước khi bắt tay vào lập trình."
                },
                step2: {
                    title: "Thiết kế Hệ thống",
                    description: "Định hướng UX, cấu trúc cơ sở dữ liệu, ranh giới API và luồng tự động hóa được thiết lập bản đồ chi tiết trước khi triển khai xây dựng."
                },
                step3: {
                    title: "Xây dựng & Tích hợp",
                    description: "Ứng dụng web, công cụ nội bộ, các tích hợp và quy trình triển khai được bàn giao đồng bộ như một hệ thống liên kết."
                },
                step4: {
                    title: "Hỗ trợ & Cải tiến",
                    description: "Sau khi ra mắt, chúng tôi tiếp tục đồng hành bảo trì, giám sát, tối ưu hiệu suất, phân tích và hỗ trợ cập nhật nội dung."
                }
            },
            support: {
                badge: "HỖ TRỢ LIÊN TỤC",
                title: "Ra mắt một lần.",
                titleGradient: "Cải tiến liên tục.",
                description: "Chúng tôi đồng hành cùng bạn trong việc bảo trì, giám sát, sao lưu, an toàn triển khai, cập nhật nội dung và đánh giá hiệu suất để hệ thống luôn phát triển sau khi phát hành.",
                monitoring: "Giám sát",
                saferDeploys: "Triển khai An toàn",
                button: "Thảo luận về Hỗ trợ"
            }
        },
        philosophy: {
            title: "Xây dựng để",
            titleGradient: "Trường tồn",
            p1: "Hầu hết các dự án web được xây dựng để ra mắt. Dự án của chúng tôi được xây dựng để tồn tại lâu dài. Chúng tôi tiếp cận mọi hệ thống với tư duy trường tồn, thiết kế các cấu trúc thích ứng với sự thay đổi chứ không sụp đổ vì nó.",
            p2: "Một trang web không phải là một cuốn brochure quảng cáo. Nó là cơ sở hạ tầng. Chúng tôi đối xử với các quyết định thiết kế như các quyết định kiến trúc: mỗi component, mỗi quy chuẩn đều phải vượt qua các đợt cập nhật, mở rộng quy mô cùng nội dung và giữ vững tính ổn định khi bảo trì.",
            p3: "Chúng tôi không chạy theo xu hướng. Chúng tôi xây dựng các hệ thống giữ được tính nhất quán qua nhiều năm chứ không phải vài tuần. Mục tiêu không phải là sự mới lạ. Đó là sự bền bỉ."
        },
        about: {
            badge: "Đội ngũ",
            title: "Định hình bởi",
            titleGradient: "Chuyên môn",
            subtitle: "Chúng tôi là một đội ngũ phát triển làm việc từ xa gồm các kỹ sư, kiến trúc sư và nhà thiết kế được gắn kết bởi niềm đam mê xây dựng những phần mềm xuất sắc.",
            engineTitle: "Động cơ Vận hành",
            engineSubtitle: "Ba trụ cột hoạt động hài hòa hoàn hảo",
            cylinders: {
                ux: {
                    title: "Chiến lược",
                    description: "Quyết định dựa trên dữ liệu. Chúng tôi phân tích cơ hội thị trường và thiết kế các giải pháp gắn kết mục tiêu kinh doanh với tính khả thi kỹ thuật."
                },
                building: {
                    title: "Hệ thống",
                    description: "Hạ tầng dưới dạng mã nguồn (IaC). Chúng tôi xây dựng các hệ thống bền bỉ, dễ mở rộng bằng các quy chuẩn DevOps hiện đại và kiến trúc điện toán đám mây."
                },
                hosting: {
                    title: "Sản phẩm",
                    description: "Hệ thống thiết kế có thể mở rộng. Chúng tôi tạo ra các trải nghiệm người dùng đẹp mắt, dễ tiếp cận và nhất quán trên các nền tảng."
                }
            },
            valuesTitle: "Giá trị cốt lõi",
            valuesSubtitle: "Những nguyên tắc định hướng cho mọi hoạt động của chúng tôi",
            values: {
                transparency: {
                    title: "Minh bạch",
                    description: "Giao tiếp rõ ràng trong từng bước đi"
                },
                quality: {
                    title: "Chất lượng",
                    description: "Mã nguồn sạch, được kiểm thử và dễ bảo trì"
                },
                ownership: {
                    title: "Trách nhiệm",
                    description: "Sự thành công của bạn chính là sự thành công của chúng tôi"
                },
                innovation: {
                    title: "Cải tiến",
                    description: "Ứng dụng các công nghệ và quy chuẩn mới nhất"
                }
            },
            joinTitle: "Đồng hành cùng chúng tôi",
            joinSubtitle: "Sẵn sàng làm việc với một đội ngũ quan tâm đến sản phẩm của bạn nhiều như chính bạn?",
            joinButton: "Bắt đầu thảo luận"
        },
        contact: {
            title: "Liên hệ",
            subtitle1: "Bạn có dự án cần triển khai? Hay chỉ là một câu hỏi?",
            subtitle2: "Chúng tôi luôn sẵn sàng lắng nghe từ bạn.",
            emailHeader: "Email",
            expectHeader: "Những gì bạn có thể kỳ vọng",
            expect1: "Chúng tôi phản hồi trong vòng 2 ngày làm việc.",
            expect2: "Nếu phù hợp, chúng ta sẽ lên lịch một cuộc trao đổi ngắn.",
            expect3: "Từ đó, chúng ta sẽ cùng xác định các bước đi tiếp theo.",
            messageSent: "Tin nhắn đã gửi",
            sentSuccess: "Chúng tôi sẽ liên hệ lại với bạn trong vòng 2 ngày làm việc.",
            form: {
                name: "Họ và tên",
                namePlaceholder: "Tên của bạn",
                email: "Email",
                emailPlaceholder: "ten@congty.com",
                company: "Công ty",
                companyOptional: "(tùy chọn)",
                companyPlaceholder: "Tên công ty của bạn",
                service: "Dịch vụ quan tâm",
                serviceSelect: "Chọn dịch vụ...",
                budget: "Ngân sách ước tính",
                budgetOptional: "(tùy chọn)",
                budgetSelect: "Chọn mức ngân sách...",
                message: "Nội dung tin nhắn",
                messagePlaceholder: "Mô tả về dự án của bạn...",
                submit: "Gửi tin nhắn",
                sending: "Đang gửi..."
            },
            services: {
                ux: 'Thiết kế Web & Hệ thống UX',
                building: 'Phát triển Web & Kiến trúc Hệ thống',
                hosting: 'Hosting, DevOps & Cơ sở hạ tầng',
                maintenance: 'Bảo trì & Tối ưu Hiệu suất',
                automation: 'AI Agents & Tự động hóa Quy trình',
                analytics: 'Phân tích Dữ liệu & Báo cáo',
                cms: 'Vận hành Nội dung & Hỗ trợ CMS',
                other: 'Khác'
            },
            budgetOptions: {
                under_1k: 'Dưới $1,000',
                _1k_5k: '$1,000 – $5,000',
                _5k_10k: '$5,000 – $10,000',
                _10k_plus: 'Trên $10,000',
                tbd: 'Chưa xác định'
            }
        },
        processPage: {
            badge: "Cách chúng tôi chuyển giao",
            title: "Quy trình kỹ thuật",
            titleGradient: "bài bản",
            subtitle: "Chúng tôi xây dựng hệ thống tập trung vào thiết kế mã nguồn, ranh giới bảo mật, triển khai container hóa và đo lường hiệu suất liên tục sau khi ra mắt.",
            deliverablesHeader: "Kết quả bàn giao",
            phase: "Giai đoạn",
            ctaTitle: "Sẵn sàng cho một hệ thống bài bản?",
            ctaSubtitle: "Hãy cùng thảo luận cách thiết kế hệ thống trường tồn với các kết quả bàn giao rõ ràng tại mỗi giai đoạn.",
            ctaButton: "Bắt đầu cuộc trò chuyện",
            phases: {
                phase1: {
                    title: "Kiến trúc",
                    description: "Xác định nền tảng. Hợp đồng API sạch, mô hình dữ liệu có thể mở rộng và xác thực tính khả thi của công nghệ.",
                    deliverables: [
                        "Tài liệu yêu cầu kỹ thuật chi tiết",
                        "Đặc tả hợp đồng API (OpenAPI 3.0)",
                        "Thiết kế cấu trúc cơ sở dữ liệu",
                        "Sơ đồ thiết kế kiến trúc hạ tầng",
                        "Xác thực và đánh giá bộ công nghệ lựa chọn"
                    ]
                },
                phase2: {
                    title: "Phát triển",
                    description: "Phát triển theo mô-đun. Giao diện người dùng hướng thành phần, API có kiểu dữ liệu chặt chẽ và quy trình quản lý Git bài bản.",
                    deliverables: [
                        "Các nhánh tính năng kèm kiểm duyệt code (PR reviews)",
                        "Tài liệu hướng dẫn sử dụng thư viện thành phần UI",
                        "Triển khai và kiểm thử API toàn diện",
                        "Thiết lập bộ kiểm thử tích hợp tự động",
                        "Triển khai bản demo thực tế hàng tuần"
                    ]
                },
                phase3: {
                    title: "Vận hành & Mở rộng",
                    description: "Pipeline tự động hóa, triển khai container hóa và hệ thống giám sát chủ động đảm bảo tính bền bỉ của sản phẩm.",
                    deliverables: [
                        "Thiết lập và cấu hình quy trình CI/CD",
                        "Container hóa ứng dụng sử dụng Docker",
                        "Cấu hình và tối ưu Kubernetes manifests",
                        "Thiết lập hệ thống giám sát và cảnh báo thời gian thực",
                        "Tối ưu hóa hiệu suất và lưu lượng truy cập"
                    ]
                }
            }
        },
        servicesPage: {
            badge: "NĂNG LỰC CỦA CHÚNG TÔI",
            title: "Dịch vụ",
            titleGradient: "Đồng bộ",
            subtitle: "Từ thiết kế thương hiệu và bố cục đến kiến trúc đám mây và cập nhật liên tục, chúng tôi tối ưu mã nguồn để đồng hành cùng doanh nghiệp bạn.",
            button: "Xem chi tiết",
            discussSupport: "Thảo luận hỗ trợ",
            heroTitlePrefix: "Chuyển giao Phần mềm",
            heroTitleGradient: "Toàn diện",
            heroSubtitle: "Chúng tôi không chỉ lập trình. Chúng tôi thiết lập kiến trúc, thiết kế giao diện, cấu hình triển khai và đảm bảo khả năng mở rộng lâu dài.",
            heroButton: "Khám phá Quy trình",
            heroLink: "Liên hệ thảo luận chiến lược",
            ctaTitlePrefix: "Sẵn sàng xây dựng",
            ctaTitleGradient: "sản phẩm đột phá",
            ctaButton: "Đặt lịch tư vấn",
            systemsSupported: "Hệ thống hỗ trợ hiện tại",
            items: {
                ux: {
                    title: "Thiết kế Web & Hệ thống UX",
                    slogan: "Giao diện được hoạch định rõ ràng, tối ưu chuyển đổi và sát với quy trình thực tế.",
                    description: "Chúng tôi thiết kế trên Figma trước khi lập trình. Gồm nghiên cứu UX, luồng người dùng, wireframe, bản thử nghiệm tương tác, hệ thống nhận diện thương hiệu và thư viện thiết kế tái sử dụng. Mục tiêu không chỉ là thẩm mỹ, mà là tạo giao diện dễ mở rộng mà không bị rối loạn."
                },
                building: {
                    title: "Phát triển Web & Kiến trúc Hệ thống",
                    slogan: "Từ trang web giới thiệu đến cổng thông tin, bảng điều khiển và công cụ nội bộ.",
                    description: "Chúng tôi xây dựng các trang web và hệ thống phần mềm tùy chỉnh có cấu trúc bài bản: cam kết API, kế hoạch database, sơ đồ kiến trúc, lựa chọn CMS và lộ trình kỹ thuật. Đây là nơi lập trình, thiết kế dữ liệu, công cụ dựng và lập kế hoạch quy trình kết hợp làm một."
                },
                hosting: {
                    title: "Hosting, DevOps & Cơ sở hạ tầng",
                    slogan: "Quy trình triển khai tự động và nền tảng đám mây luôn vận hành ổn định.",
                    description: "Chúng tôi thiết lập hosting theo nhu cầu thực tế: VPS hoặc cloud, triển khai Docker hóa, CI/CD pipeline, reverse proxy, SSL, sao lưu tự động, giám sát và kế hoạch rollback. Dù chạy trên AWS, GCP, Azure hay VPS cơ bản, chúng tôi luôn hướng tới tính ổn định."
                },
                maintenance: {
                    title: "Bảo trì, Hiệu suất & Khả năng Mở rộng",
                    slogan: "Chăm sóc dài hạn cho phần mềm liên tục thay đổi sau khi ra mắt.",
                    description: "Bảo trì không chỉ là sửa lỗi. Chúng tôi tối ưu hiệu suất, Core Web Vitals, giám sát vận hành, gia cố bảo mật, kiểm tra uptime, vá lỗi và đánh giá quy mô khi hệ thống lớn mạnh. Chúng tôi cũng tích hợp SEO kỹ thuật, cấu trúc schema và tối ưu hóa liên tục."
                },
                automation: {
                    title: "AI Agents & Tự động hóa Quy trình",
                    slogan: "Tự động hóa các tác vụ lặp đi lặp lại mà không làm ảnh hưởng tới hệ thống.",
                    description: "Chúng tôi tích hợp AI vào nơi thực sự có ích: bot hỗ trợ, tự động báo cáo, đề xuất tự động, dashboard thông minh, luồng LLM tùy chỉnh và trợ lý nội bộ kết nối trực tiếp với dữ liệu thực. Gồm cả tự động hóa qua Zapier, Make và API tùy chỉnh."
                },
                analytics: {
                    title: "Phân tích Dữ liệu & Báo cáo",
                    slogan: "Dashboard và thông tin phân tích giúp đội ngũ của bạn ra quyết định dễ dàng.",
                    description: "Chúng tôi giúp chuyển đổi dữ liệu sản phẩm và vận hành thành thông tin thực tế: dashboard KPI, phân tích phễu, bản đồ nhiệt, quy trình báo cáo và đánh giá hàng tháng. Thay vì các số liệu rời rạc, chúng tôi gom chúng thành các báo cáo phục vụ trực tiếp cho việc ra quyết định."
                },
                cms: {
                    title: "Vận hành Nội dung & Hỗ trợ CMS",
                    slogan: "Giữ cho luồng nội dung luôn trôi chảy mà không bị nghẽn thủ công.",
                    description: "Chúng tôi hỗ trợ cả phần vận hành nội dung hàng ngày: quy trình xuất bản blog, cập nhật sản phẩm, làm mới landing page, hệ thống nội dung cấu trúc và pipeline nội dung hỗ trợ bởi AI. Giúp việc chỉnh sửa nội dung nhanh hơn, an toàn và dễ phân quyền."
                }
            }
        },
        work: {
            badgeCrossVertical: "Đa lĩnh vực",
            descCrossVertical: "Các dự án thực tế trong EdTech, FinTech, E-commerce và hệ thống hạ tầng đám mây.",
            badgeArchitectureLed: "Trọng tâm Kiến trúc",
            descArchitectureLed: "Những sản phẩm thực tế tập trung vào chiều sâu kiến trúc hệ thống, sự bền bỉ và khả năng mở rộng thay vì giao diện có sẵn.",
            title: "Các dự án",
            titleGradient: "đã triển khai",
            subtitle: "Từ các nền tảng phục vụ hàng ngàn người dùng hoạt động đến các hệ thống cơ sở dữ liệu bất động sản hiệu năng cao. Chúng tôi ghi nhận giá trị thực tế.",
            challenge: "Thách thức",
            architecture: "Kiến trúc",
            badge: "Dự án thực tế",
            ctaTitle: "Bạn muốn thấy dự án của mình ở đây?",
            ctaSubtitle: "Hãy cùng thảo luận để hiện thực hóa tầm nhìn ứng dụng của bạn.",
            ctaButton: "Bắt đầu dự án của bạn",
            categories: {
                all: "Tất cả",
                edtech: "EdTech",
                ecommerce: "E-commerce",
                realestate: "Bất động sản",
                enterprise: "Đào tạo Doanh nghiệp",
                internal: "Công cụ nội bộ",
                cybersecurity: "An ninh mạng"
            },
            projects: {
                academix: {
                    description: "Hệ thống quản lý học tập (LMS) toàn diện phân quyền cho giảng viên và học viên, tích hợp tạo nội dung thông minh tự động.",
                    challenge: "Hệ thống LMS đa khách thuê (Multi-tenant) cho hơn 10k người dùng với phân cấp vai trò phức tạp và cộng tác thời gian thực.",
                    architecture: "Theo dõi tiến độ học tập thời gian thực bằng Socket.io, kiến trúc microservices dạng mô-đun, PostgreSQL bảo mật cấp dòng."
                },
                ecofit: {
                    description: "Giải pháp thương mại điện tử quy mô lớn tích hợp quản lý kho tự động và xử lý thanh toán mượt mà qua Stripe.",
                    challenge: "Đồng bộ hóa kho hàng và thanh toán lưu lượng lớn qua nhiều kho hàng và kênh bán hàng khác nhau.",
                    architecture: "Kiến trúc hướng sự kiện (Event-driven) với hàng đợi tin nhắn để xử lý đơn hàng, mô hình nhất quán sau cùng."
                },
                nclake: {
                    description: "Nền tảng tìm kiếm và giới thiệu bất động sản ven hồ chuyên biệt tại khu vực Blue Ridge Mountain Foothills, Bắc Carolina.",
                    challenge: "Tích hợp luồng dữ liệu MLS thời gian thực đáng tin cậy đồng thời mang lại trải nghiệm tìm kiếm hình ảnh tốc độ cao.",
                    architecture: "Tối ưu hóa build tĩnh với Next.js, tích hợp CMS không đầu (headless), thực hiện truy vấn địa lý nâng cao qua PostGIS."
                },
                portalLearning: {
                    description: "Nền tảng quản lý đào tạo và tuân thủ nội bộ của nhân viên doanh nghiệp với phân công khóa học, giả lập lừa đảo và dashboard theo dõi tiến độ.",
                    challenge: "Đảm bảo tính tuân thủ nghiêm ngặt và khả năng kiểm toán quy trình đào tạo trên hàng ngàn vai trò nhân sự khác nhau.",
                    architecture: "Triển khai Serverless functions để ghi nhận tương tác, hệ thống RBAC chặt chẽ, kiến trúc tách biệt dữ liệu đa khách thuê."
                },
                enterpriseCore: {
                    description: "Hiện đại hóa và chuyển đổi đám mây cho các hệ thống doanh nghiệp quy mô lớn, chuyển đổi ứng dụng WinForms cũ sang nền tảng web hiện đại.",
                    challenge: "Di chuyển cơ sở dữ liệu và mã nguồn ứng dụng nguyên khối mà không làm mất dữ liệu hay gián đoạn dịch vụ.",
                    architecture: "Áp dụng mô hình Strangler Fig thông qua API gateways, microservices chạy trong AWS EKS, đồng bộ database song song."
                },
                selecttech: {
                    description: "Giải pháp CNTT & nền tảng an ninh mạng hỗ trợ bởi AI cho MSP 23 năm tuổi tại Bắc Carolina — bao gồm quản lý tuân thủ, CNTT, sửa chữa thiết bị và hạ tầng.",
                    challenge: "Hợp nhất một loạt dịch vụ phức tạp (FTC Safeguards, PCI, HIPAA, sửa chữa thiết bị, hạ tầng mạng) vào một trang web hiện đại, đồng bộ.",
                    architecture: "Vite + React SPA với các trang dịch vụ dạng mô-đun, hoạt họa UI với Framer Motion, đầu ra tĩnh tối ưu SEO, tích hợp luồng liên hệ và báo giá."
                }
            }
        }
    },
};

export type TranslationKeys = typeof translations.en;
export type TranslationKeyPath = string; // Simplified nested path support
