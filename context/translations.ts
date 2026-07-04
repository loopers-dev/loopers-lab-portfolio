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
            badge: "Studio Phát Triển Phần Mềm & Vận Hành Hệ Thống Chuyên Nghiệp",
            headlineWords: ['Thiết kế,', 'xây dựng,', 'và', 'vận hành'],
            headlineGradient: 'hệ thống phần mềm bền vững.',
            subtitle: 'Giải pháp đồng bộ từ khâu thiết kế đến triển khai: Tối ưu hóa website, tự động hóa quy trình và tích hợp AI chuyên sâu cho doanh nghiệp.',
            button: 'Bắt đầu dự án',
        },
        services: {
            title: "Dịch vụ phát triển",
            titleGradient: "phần mềm",
            subtitle: "Chúng tôi thiết kế, xây dựng, tối ưu hạ tầng và đồng hành dài hạn cùng doanh nghiệp, giúp hệ thống vận hành ổn định sau khi bàn giao.",
            items: {
                ux: {
                    title: "Thiết kế Web & UX",
                    description: "Thiết kế giao diện Figma chuyên sâu, xây dựng wireframe, prototype và hệ thống UI/UX tối ưu hóa trải nghiệm người dùng trên đa thiết bị."
                },
                building: {
                    title: "Phát triển Web & Kiến trúc",
                    description: "Phát triển ứng dụng web, cổng thông tin doanh nghiệp, cơ sở dữ liệu và hệ thống API chuẩn hóa, hướng tới hiệu năng và khả năng bảo trì lâu dài."
                },
                hosting: {
                    title: "Hosting & CI/CD",
                    description: "Thiết lập hạ tầng đám mây, cấu hình CI/CD tự động, tối ưu hóa bảo mật SSL, tự động sao lưu dữ liệu và giám sát hệ thống 24/7."
                },
                maintenance: {
                    title: "Bảo trì & Mở rộng",
                    description: "Bảo trì định kỳ, vá lỗ hổng bảo mật, tối ưu hiệu suất tải trang (Core Web Vitals) và hỗ trợ kỹ thuật liên tục giúp website luôn hoạt động ổn định."
                },
                automation: {
                    title: "AI Agents & Tự động hóa",
                    description: "Tích hợp mô hình ngôn ngữ lớn (LLM), xây dựng chatbot AI thông minh và tự động hóa các quy trình vận hành giúp doanh nghiệp tiết kiệm thời gian và chi phí."
                },
                analytics: {
                    title: "Phân tích Dữ liệu & Báo cáo",
                    description: "Xây dựng dashboard trực quan, phân tích phễu chuyển đổi và cung cấp báo cáo đo lường chi tiết để tối ưu hóa hiệu quả hoạt động kinh doanh."
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
            badge: "Studio Phát Triển Phần Mềm & Vận Hành Hệ Thống Chuyên Nghiệp",
            headlineWords: ['Thiết kế,', 'xây dựng,', 'và', 'vận hành'],
            headlineGradient: 'hệ thống phần mềm bền vững.',
            subtitle: 'Giải pháp đồng bộ từ khâu thiết kế đến triển khai: Tối ưu hóa website, tự động hóa quy trình và tích hợp AI chuyên sâu cho doanh nghiệp.',
            button: 'Bắt đầu dự án',
        },
        services: {
            title: "Dịch vụ phát triển",
            titleGradient: "phần mềm",
            subtitle: "Chúng tôi thiết kế, xây dựng, tối ưu hạ tầng và đồng hành dài hạn cùng doanh nghiệp, giúp hệ thống vận hành ổn định sau khi bàn giao.",
            items: {
                ux: {
                    title: "Thiết kế Web & UX",
                    description: "Thiết kế giao diện Figma chuyên sâu, xây dựng wireframe, prototype và hệ thống UI/UX tối ưu hóa trải nghiệm người dùng trên đa thiết bị."
                },
                building: {
                    title: "Phát triển Web & Kiến trúc",
                    description: "Phát triển ứng dụng web, cổng thông tin doanh nghiệp, cơ sở dữ liệu và hệ thống API chuẩn hóa, hướng tới hiệu năng và khả năng bảo trì lâu dài."
                },
                hosting: {
                    title: "Hosting & CI/CD",
                    description: "Thiết lập hạ tầng đám mây, cấu hình CI/CD tự động, tối ưu hóa bảo mật SSL, tự động sao lưu dữ liệu và giám sát hệ thống 24/7."
                },
                maintenance: {
                    title: "Bảo trì & Mở rộng",
                    description: "Bảo trì định kỳ, vá lỗ hổng bảo mật, tối ưu hiệu suất tải trang (Core Web Vitals) và hỗ trợ kỹ thuật liên tục giúp website luôn hoạt động ổn định."
                },
                automation: {
                    title: "AI Agents & Tự động hóa",
                    description: "Tích hợp mô hình ngôn ngữ lớn (LLM), xây dựng chatbot AI thông minh và tự động hóa các quy trình vận hành giúp doanh nghiệp tiết kiệm thời gian và chi phí."
                },
                analytics: {
                    title: "Phân tích Dữ liệu & Báo cáo",
                    description: "Xây dựng dashboard trực quan, phân tích phễu chuyển đổi và cung cấp báo cáo đo lường chi tiết để tối ưu hóa hiệu quả hoạt động kinh doanh."
                }
            }
        },
        process: {
            title: "Quy trình",
            titleGradient: "làm việc",
            steps: {
                step1: {
                    title: "Phân tích & Đánh giá",
                    description: "Khảo sát quy trình và đánh giá rào cản kỹ thuật để xác định rõ phạm vi công việc, hạn chế rủi ro trước khi lập trình."
                },
                step2: {
                    title: "Thiết kế Hệ thống",
                    description: "Định hình trải nghiệm người dùng (UX), thiết kế kiến trúc cơ sở dữ liệu, chuẩn hóa API và lập bản đồ tự động hóa trước khi triển khai thực tế."
                },
                step3: {
                    title: "Xây dựng & Tích hợp",
                    description: "Lập trình ứng dụng web, xây dựng công cụ nội bộ và thiết lập quy trình triển khai tự động, đảm bảo toàn bộ hệ thống hoạt động đồng bộ."
                },
                step4: {
                    title: "Hỗ trợ & Cải tiến",
                    description: "Hỗ trợ kỹ thuật sau bàn giao, giám sát uptime, vá lỗi bảo mật, tối ưu tốc độ và đồng hành cùng doanh nghiệp cập nhật các tính năng mới."
                }
            },
            support: {
                badge: "HỖ TRỢ LIÊN TỤC",
                title: "Ra mắt một lần.",
                titleGradient: "Cải tiến liên tục.",
                description: "Chúng tôi đồng hành lâu dài cùng doanh nghiệp: từ bảo trì, giám sát hệ thống, sao lưu định kỳ đến kiểm tra an toàn triển khai và tối ưu hóa hiệu năng tổng thể.",
                monitoring: "Giám sát hệ thống",
                saferDeploys: "Triển khai An toàn",
                button: "Thảo luận về Hỗ trợ"
            }
        },
        philosophy: {
            title: "Xây dựng để",
            titleGradient: "Trường tồn",
            p1: "Đa số các dự án website hiện nay chỉ tập trung vào việc ra mắt nhanh chóng. Chúng tôi chọn hướng đi khác: kiến tạo các hệ thống bền vững theo thời gian. Mọi cấu trúc phần mềm đều được thiết kế linh hoạt, dễ dàng thích ứng với sự thay đổi của công nghệ và quy mô doanh nghiệp mà không bị gián đoạn.",
            p2: "Website không đơn thuần là một trang thông tin quảng cáo, nó là nền tảng hạ tầng của doanh nghiệp. Chúng tôi đưa ra các quyết định thiết kế dựa trên tư duy kiến trúc hệ thống: từng thành phần (component) và quy chuẩn mã nguồn đều phải đảm bảo tính ổn định cao khi nâng cấp và bảo trì lâu dài.",
            p3: "Thay vì chạy theo những xu hướng nhất thời, chúng tôi tập trung phát triển các hệ thống giữ được tính nhất quán và hiệu năng tối ưu qua nhiều năm. Giá trị cốt lõi chúng tôi mang lại không chỉ là sự mới mẻ, mà là độ bền bỉ và hiệu quả thực tế."
        },
        about: {
            badge: "Đội ngũ",
            title: "Định hình bởi",
            titleGradient: "Chuyên môn",
            subtitle: "Chúng tôi là một đội ngũ phát triển làm việc từ xa gồm các kỹ sư, kiến trúc sư và nhà thiết kế tâm huyết, cùng chung sứ mệnh xây dựng những phần mềm xuất sắc.",
            engineTitle: "Động cơ Vận hành",
            engineSubtitle: "Sự phối hợp nhịp nhàng giữa ba trụ cột công nghệ",
            cylinders: {
                ux: {
                    title: "Chiến lược",
                    description: "Đưa ra quyết định dựa trên số liệu thực tế. Chúng tôi phân tích sâu cơ hội thị trường và thiết kế giải pháp cân bằng giữa mục tiêu kinh doanh và tính khả thi về mặt kỹ thuật."
                },
                building: {
                    title: "Hệ thống",
                    description: "Quản lý hạ tầng dưới dạng mã nguồn (IaC). Chúng tôi phát triển các hệ thống ổn định, dễ mở rộng nhờ ứng dụng quy trình DevOps hiện đại và kiến trúc Cloud-native."
                },
                hosting: {
                    title: "Sản phẩm",
                    description: "Xây dựng hệ thống thiết kế (Design System) chuẩn hóa. Chúng tôi mang đến trải nghiệm người dùng trực quan, thẩm mỹ và nhất quán trên mọi nền tảng."
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
            expectHeader: "Quy trình tiếp nhận & xử lý thông tin",
            expect1: "Phản hồi nhanh chóng trong vòng 24 - 48 giờ làm việc.",
            expect2: "Nếu phù hợp, chúng ta sẽ lên lịch một cuộc trao đổi ngắn.",
            expect3: "Từ đó, chúng ta sẽ cùng xác định các bước đi tiếp theo.",
            messageSent: "Tin nhắn đã gửi thành công",
            sentSuccess: "Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.",
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
                messagePlaceholder: "Mô tả sơ lược về dự án của bạn...",
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
                    title: "Kiến trúc & Định hình",
                    description: "Thiết lập nền tảng vững chắc thông qua việc xác định rõ yêu cầu nghiệp vụ, thiết kế cấu trúc dữ liệu và thống nhất tiêu chuẩn API.",
                    deliverables: [
                        "Tài liệu yêu cầu kỹ thuật chi tiết",
                        "Đặc tả hợp đồng API (OpenAPI 3.0)",
                        "Thiết kế cấu trúc cơ sở dữ liệu",
                        "Sơ đồ thiết kế kiến trúc hạ tầng",
                        "Xác thực và đánh giá bộ công nghệ lựa chọn"
                    ]
                },
                phase2: {
                    title: "Phát triển & Kiểm thử",
                    description: "Phát triển theo kiến trúc mô-đun hóa. Xây dựng giao diện UI tái sử dụng, viết API với kiểu dữ liệu chặt chẽ và kiểm soát mã nguồn chặt chẽ qua Git.",
                    deliverables: [
                        "Các nhánh tính năng kèm kiểm duyệt code (PR reviews)",
                        "Tài liệu hướng dẫn sử dụng thư viện thành phần UI",
                        "Triển khai và kiểm thử API toàn diện",
                        "Thiết lập bộ kiểm thử tích hợp tự động",
                        "Triển khai bản demo thực tế hàng tuần"
                    ]
                },
                phase3: {
                    title: "Triển khai & Vận hành",
                    description: "Tự động hóa vận hành: cấu hình CI/CD, đóng gói ứng dụng (Docker) và thiết lập hệ thống giám sát cảnh báo tức thời để bảo đảm hệ thống vận hành liên tục.",
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
            titleGradient: "Toàn diện",
            subtitle: "Từ thiết kế thương hiệu và bố cục đến kiến trúc đám mây và cập nhật liên tục, chúng tôi tối ưu mã nguồn để đồng hành cùng doanh nghiệp bạn.",
            button: "Xem chi tiết",
            discussSupport: "Thảo luận hỗ trợ",
            heroTitlePrefix: "Giải pháp phát triển",
            heroTitleGradient: "Website & Phần mềm trọn gói",
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
                    description: "Chúng tôi thiết kế giao diện trên Figma trước khi tiến hành lập trình. Quy trình bao gồm nghiên cứu hành vi người dùng (UX), vẽ luồng trải nghiệm, xây dựng wireframe, thiết kế prototype tương tác và thiết lập hệ thống thiết kế (Design System) nhất quán. Mục tiêu là tạo ra những giao diện trực quan, dễ mở rộng mà không làm rối loạn cấu trúc thiết kế ban đầu."
                },
                building: {
                    title: "Phát triển Web & Kiến trúc Hệ thống",
                    slogan: "Từ trang web giới thiệu đến cổng thông tin, bảng điều khiển và công cụ nội bộ.",
                    description: "Chúng tôi chuyên phát triển các website và hệ thống phần mềm tùy chỉnh có cấu trúc vững chắc: thiết lập hợp đồng API rõ ràng, thiết kế cơ sở dữ liệu tối ưu, xây dựng sơ đồ kiến trúc hạ tầng và lựa chọn CMS phù hợp. Mọi quy trình lập trình và xây dựng luồng dữ liệu đều được tích hợp đồng bộ."
                },
                hosting: {
                    title: "Hosting, DevOps & Cơ sở hạ tầng",
                    slogan: "Quy trình triển khai tự động và nền tảng đám mây luôn vận hành ổn định.",
                    description: "Thiết lập hệ thống máy chủ và hạ tầng đám mây đáp ứng đúng nhu cầu thực tế của doanh nghiệp: quản lý VPS/Cloud, đóng gói ứng dụng qua Docker, cấu hình pipeline CI/CD tự động, cài đặt reverse proxy, bảo mật SSL, tự động hóa quy trình sao lưu và chuẩn bị phương án khôi phục dữ liệu nhanh chóng."
                },
                maintenance: {
                    title: "Bảo trì, Hiệu suất & Khả năng Mở rộng",
                    slogan: "Chăm sóc dài hạn cho phần mềm liên tục thay đổi sau khi ra mắt.",
                    description: "Bảo trì không chỉ đơn thuần là sửa lỗi phát sinh. Chúng tôi thực hiện tối ưu hóa hiệu năng, cải thiện các chỉ số Core Web Vitals giúp website đạt tốc độ tải trang cao nhất, vá lỗ hổng bảo mật, giám sát vận hành và nâng cấp hệ thống. Đồng thời, chúng tôi hỗ trợ triển khai SEO kỹ thuật (Technical SEO) và cấu trúc dữ liệu schema để tăng thứ hạng tìm kiếm."
                },
                automation: {
                    title: "AI Agents & Tự động hóa Quy trình",
                    slogan: "Tự động hóa các tác vụ lặp đi lặp lại mà không làm ảnh hưởng tới hệ thống.",
                    description: "Chúng tôi tích hợp các giải pháp trí tuệ nhân tạo (AI) vào các quy trình phù hợp: xây dựng chatbot hỗ trợ khách hàng, tự động hóa báo cáo định kỳ, phát triển dashboard thông minh và tích hợp các trợ lý ảo nội bộ dựa trên dữ liệu thực của doanh nghiệp. Thiết lập các luồng tự động hóa thông qua Zapier, Make hoặc API tùy chỉnh để loại bỏ các tác vụ thủ công lặp đi lặp lại."
                },
                analytics: {
                    title: "Phân tích Dữ liệu & Báo cáo",
                    slogan: "Dashboard và thông tin phân tích giúp đội ngũ của bạn ra quyết định dễ dàng.",
                    description: "Chuyển đổi dữ liệu thô từ hoạt động vận hành và sản phẩm thành những thông tin chi tiết, có giá trị ra quyết định: xây dựng dashboard KPI trực quan, phân tích phễu chuyển đổi, lập bản đồ nhiệt (heatmap) và gửi báo cáo đánh giá định kỳ hàng tháng. Mọi chỉ số sẽ được chuẩn hóa để hỗ trợ đắc lực cho đội ngũ quản lý."
                },
                cms: {
                    title: "Vận hành Nội dung & Hỗ trợ CMS",
                    slogan: "Giữ cho luồng nội dung luôn trôi chảy mà không bị nghẽn thủ công.",
                    description: "Hỗ trợ tối ưu hóa quy trình quản lý và cập nhật nội dung hàng ngày: thiết lập luồng xuất bản blog, cập nhật thông tin sản phẩm mới, thiết kế và tối ưu landing page, xây dựng cấu trúc nội dung chuẩn SEO và ứng dụng AI vào việc soạn thảo có kiểm duyệt. Giúp việc chỉnh sửa nội dung diễn ra nhanh chóng, an toàn và dễ dàng phân quyền cho nhân sự."
                }
            }
        },
        work: {
            badgeCrossVertical: "Đa lĩnh vực",
            descCrossVertical: "Các dự án thực tế trong EdTech, FinTech, E-commerce và hệ thống hạ tầng đám mây.",
            badgeArchitectureLed: "Trọng tâm Kiến trúc",
            descArchitectureLed: "Những sản phẩm thực tế tập trung vào chiều sâu kiến trúc hệ thống, sự bền bỉ và khả năng mở rộng thay vì giao diện có sẵn.",
            title: "Giải pháp",
            titleGradient: "Tiêu biểu",
            subtitle: "Từ các nền tảng phục vụ hàng chục ngàn người dùng đến hệ thống cơ sở dữ liệu bất động sản hiệu năng cao. Chúng tôi nói bằng kết quả thực tế, không dùng lời sáo rỗng.",
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
                    challenge: "Xây dựng hệ thống học tập trực tuyến LMS (Multi-tenant) cho hơn 10.000 người dùng với phân cấp vai trò phức tạp và tương tác thời gian thực.",
                    architecture: "Theo dõi tiến độ học tập thực tế qua Socket.io, phát triển kiến trúc Microservices dạng mô-đun và lưu trữ trên PostgreSQL bảo mật cấp dòng (RLS)."
                },
                ecofit: {
                    description: "Giải pháp thương mại điện tử quy mô lớn tích hợp quản lý kho tự động và xử lý thanh toán mượt mà qua Stripe.",
                    challenge: "Đồng bộ hóa dữ liệu tồn kho và xử lý thanh toán trực tuyến lưu lượng lớn qua nhiều kho hàng và kênh phân phối khác nhau.",
                    architecture: "Kiến trúc hướng sự kiện (Event-driven) với hàng đợi tin nhắn (Message Queue) để xử lý đơn hàng, đảm bảo tính nhất quán dữ liệu sau cùng (Eventual Consistency)."
                },
                nclake: {
                    description: "Nền tảng tìm kiếm và giới thiệu bất động sản ven hồ chuyên biệt tại khu vực Blue Ridge Mountain Foothills, Bắc Carolina.",
                    challenge: "Tích hợp luồng dữ liệu bất động sản (MLS) thời gian thực, đồng thời tối ưu hóa trải nghiệm tìm kiếm bản đồ và hình ảnh tốc độ cao.",
                    architecture: "Tối ưu hóa tải trang tĩnh (Static Site Generation) bằng Next.js, kết nối Headless CMS và thực hiện truy vấn địa lý nâng cao qua PostGIS."
                },
                portalLearning: {
                    description: "Nền tảng quản lý đào tạo và tuân thủ nội bộ của nhân viên doanh nghiệp với phân công khóa học, giả lập lừa đảo và dashboard theo dõi tiến độ.",
                    challenge: "Đảm bảo tính tuân thủ nghiêm ngặt và khả năng kiểm toán quy trình đào tạo trên hàng ngàn vai trò nhân sự khác nhau.",
                    architecture: "Triển khai Serverless Functions ghi nhận tương tác, cấu hình hệ thống phân quyền (RBAC) chặt chẽ và tách biệt dữ liệu đa người dùng."
                },
                enterpriseCore: {
                    description: "Hiện đại hóa và chuyển đổi đám mây cho các hệ thống doanh nghiệp quy mô lớn, chuyển đổi ứng dụng WinForms cũ sang nền tảng web hiện đại.",
                    challenge: "Di chuyển hệ thống phần mềm doanh nghiệp nguyên khối (Monolith) cũ sang hạ tầng đám mây hiện đại mà không gây gián đoạn dịch vụ.",
                    architecture: "Áp dụng mô hình chuyển đổi Strangler Fig thông qua API Gateways, chuyển đổi sang Microservices chạy trên AWS EKS và đồng bộ hóa cơ sở dữ liệu song song."
                },
                selecttech: {
                    description: "Giải pháp CNTT & nền tảng an ninh mạng hỗ trợ bởi AI cho MSP 23 năm tuổi tại Bắc Carolina — bao gồm quản lý tuân thủ, CNTT, sửa chữa thiết bị và hạ tầng.",
                    challenge: "Hợp nhất toàn bộ dịch vụ bảo mật và CNTT phức tạp (đáp ứng tiêu chuẩn FTC Safeguards, PCI, HIPAA) vào một trang web hiện đại và đồng bộ.",
                    architecture: "Phát triển ứng dụng Web SPA bằng Vite và React với các mô-đun dịch vụ linh hoạt, tối ưu hóa SEO kỹ thuật cho mã nguồn tĩnh và tích hợp luồng đăng ký báo giá tự động."
                }
            }
        }
    },
};

export type TranslationKeys = typeof translations.en;
export type TranslationKeyPath = string; // Simplified nested path support
